//! This module implements zk-proof batch verifier functionality.

use crate::{
    alphas::Alphas,
    circuits::{
        argument::ArgumentType,
        constraints::ConstraintSystem,
        expr::{Column, Constants, PolishToken},
        gate::GateType,
        lookup::{lookups::LookupsUsed, tables::combine_table},
        polynomials::{generic, permutation},
        scalars::RandomOracles,
        wires::*,
    },
    curve::KimchiCurve,
    error::VerifyError,
    plonk_sponge::FrSponge,
    proof::{ProverProof, RecursionChallenge},
    verifier_index::VerifierIndex,
};
use ark_ff::{Field, One, PrimeField, Zero};
use ark_poly::{EvaluationDomain, Polynomial};
use commitment_dlog::commitment::{
    b_poly, b_poly_coefficients, combined_inner_product, BatchEvaluationProof, CommitmentCurve,
    Evaluation, PolyComm,
};
use itertools::izip;
use oracle::{sponge::ScalarChallenge, FqSponge};
use rand::thread_rng;

/// The result of a proof verification.
pub type Result<T> = std::result::Result<T, VerifyError>;

/// The result of running the oracle protocol
pub struct OraclesResult<G, EFqSponge>
where
    G: CommitmentCurve,
    EFqSponge: Clone + FqSponge<G::BaseField, G, G::ScalarField>,
{
    /// A sponge that acts on the base field of a curve
    pub fq_sponge: EFqSponge,
    /// the last evaluation of the Fq-Sponge in this protocol
    pub digest: G::ScalarField,
    /// the challenges produced in the protocol
    pub oracles: RandomOracles<G::ScalarField>,
    /// the computed powers of alpha
    pub all_alphas: Alphas<G::ScalarField>,
    /// public polynomial evaluations
    pub p_eval: Vec<Vec<G::ScalarField>>,
    /// zeta^n and (zeta * omega)^n
    pub powers_of_eval_points_for_chunks: [G::ScalarField; 2],
    /// recursion data
    #[allow(clippy::type_complexity)]
    pub polys: Vec<(PolyComm<G>, Vec<Vec<G::ScalarField>>)>,
    /// pre-computed zeta^n
    pub zeta1: G::ScalarField,
    /// The evaluation f(zeta) - t(zeta) * Z_H(zeta)
    pub ft_eval0: G::ScalarField,
    /// Used by the OCaml side
    pub combined_inner_product: G::ScalarField,
}

impl<G: KimchiCurve> ProverProof<G>
where
    G::BaseField: PrimeField,
{
    pub fn prev_chal_evals(
        &self,
        index: &VerifierIndex<G>,
        evaluation_points: &[G::ScalarField],
        powers_of_eval_points_for_chunks: &[G::ScalarField],
    ) -> Vec<Vec<Vec<G::ScalarField>>> {
        self.prev_challenges
            .iter()
            .map(|RecursionChallenge { chals, comm: _ }| {
                // No need to check the correctness of poly explicitly. Its correctness is assured by the
                // checking of the inner product argument.
                let b_len = 1 << chals.len();
                let mut b: Option<Vec<G::ScalarField>> = None;

                (0..2)
                    .map(|i| {
                        let full = b_poly(chals, evaluation_points[i]);
                        if index.max_poly_size == b_len {
                            return vec![full];
                        }
                        let mut betaacc = G::ScalarField::one();
                        let diff = (index.max_poly_size..b_len)
                            .map(|j| {
                                let b_j = match &b {
                                    None => {
                                        let t = b_poly_coefficients(chals);
                                        let res = t[j];
                                        b = Some(t);
                                        res
                                    }
                                    Some(b) => b[j],
                                };

                                let ret = betaacc * b_j;
                                betaacc *= &evaluation_points[i];
                                ret
                            })
                            .fold(G::ScalarField::zero(), |x, y| x + y);
                        vec![full - (diff * powers_of_eval_points_for_chunks[i]), diff]
                    })
                    .collect()
            })
            .collect()
    }

    /// This function runs the random oracle argument
    pub fn oracles<
        EFqSponge: Clone + FqSponge<G::BaseField, G, G::ScalarField>,
        EFrSponge: FrSponge<G::ScalarField>,
    >(
        &self,
        index: &VerifierIndex<G>,
        p_comm: &PolyComm<G>,
    ) -> Result<OraclesResult<G, EFqSponge>> {
        //~
        //~ #### Fiat-Shamir argument
        //~
        //~ We run the following algorithm:
        //~
        let n = index.domain.size;
        let (_, endo_r) = G::endos();

        //~ 1. Setup the Fq-Sponge.
        let mut fq_sponge = EFqSponge::new(G::OtherCurve::sponge_params());

        //~ 1. Absorb the commitments of the previous challenges with the Fq-sponge.
        for RecursionChallenge { comm, .. } in self.prev_challenges.iter() {
            fq_sponge.absorb_g(&comm.unshifted);
        }

        //~ 1. Absorb the commitment of the public input polynomial with the Fq-Sponge.
        fq_sponge.absorb_g(&p_comm.unshifted);

        //~ 1. Absorb the commitments to the registers / witness columns with the Fq-Sponge.
        self.commitments
            .w_comm
            .iter()
            .for_each(|c| fq_sponge.absorb_g(&c.unshifted));

        //~ 1. If lookup is used:
        let joint_combiner = if let Some(l) = &index.lookup_index {
            let lookup_commits = self
                .commitments
                .lookup
                .as_ref()
                .ok_or(VerifyError::LookupCommitmentMissing)?;

            // if runtime is used, absorb the commitment
            if l.runtime_tables_selector.is_some() {
                let runtime_commit = lookup_commits
                    .runtime
                    .as_ref()
                    .ok_or(VerifyError::IncorrectRuntimeProof)?;
                fq_sponge.absorb_g(&runtime_commit.unshifted);
            }

            //~~ - If it involves queries to a multiple-column lookup table,
            //~~   then squeeze the Fq-Sponge to obtain the joint combiner challenge $j'$,
            //~~   otherwise set the joint combiner challenge $j'$ to $0$.
            let joint_lookup_used = matches!(l.lookup_used, LookupsUsed::Joint);
            let joint_combiner = if joint_lookup_used {
                fq_sponge.challenge()
            } else {
                G::ScalarField::zero()
            };

            //~~ - Derive the scalar joint combiner challenge $j$ from $j'$ using the endomorphism.
            //~~   (TODO: specify endomorphism)
            let joint_combiner = ScalarChallenge(joint_combiner);
            let joint_combiner_field = joint_combiner.to_field(endo_r);
            let joint_combiner = (joint_combiner, joint_combiner_field);

            //~~ - absorb the commitments to the sorted polynomials.
            for com in &lookup_commits.sorted {
                fq_sponge.absorb_g(&com.unshifted);
            }

            Some(joint_combiner)
        } else {
            None
        };

        //~ 1. Sample $\beta$ with the Fq-Sponge.
        let beta = fq_sponge.challenge();

        //~ 1. Sample $\gamma$ with the Fq-Sponge.
        let gamma = fq_sponge.challenge();

        //~ 1. If using lookup, absorb the commitment to the aggregation lookup polynomial.
        self.commitments.lookup.iter().for_each(|l| {
            fq_sponge.absorb_g(&l.aggreg.unshifted);
        });

        //~ 1. Absorb the commitment to the permutation trace with the Fq-Sponge.
        fq_sponge.absorb_g(&self.commitments.z_comm.unshifted);

        //~ 1. Sample $\alpha'$ with the Fq-Sponge.
        let alpha_chal = ScalarChallenge(fq_sponge.challenge());

        //~ 1. Derive $\alpha$ from $\alpha'$ using the endomorphism (TODO: details).
        let alpha = alpha_chal.to_field(endo_r);

        //~ 1. Enforce that the length of the $t$ commitment is of size `PERMUTS`.
        if self.commitments.t_comm.unshifted.len() != PERMUTS {
            return Err(VerifyError::IncorrectCommitmentLength("t"));
        }

        //~ 1. Absorb the commitment to the quotient polynomial $t$ into the argument.
        fq_sponge.absorb_g(&self.commitments.t_comm.unshifted);

        //~ 1. Sample $\zeta'$ with the Fq-Sponge.
        let zeta_chal = ScalarChallenge(fq_sponge.challenge());

        //~ 1. Derive $\zeta$ from $\zeta'$ using the endomorphism (TODO: specify).
        let zeta = zeta_chal.to_field(endo_r);

        //~ 1. Setup the Fr-Sponge.
        let digest = fq_sponge.clone().digest();
        let mut fr_sponge = EFrSponge::new(G::sponge_params());

        //~ 1. Squeeze the Fq-sponge and absorb the result with the Fr-Sponge.
        fr_sponge.absorb(&digest);

        // prepare some often used values
        let zeta1 = zeta.pow(&[n]);
        let zetaw = zeta * index.domain.group_gen;

        // retrieve ranges for the powers of alphas
        let mut all_alphas = index.powers_of_alpha.clone();
        all_alphas.instantiate(alpha);

        // compute Lagrange base evaluation denominators
        let w: Vec<_> = index.domain.elements().take(self.public.len()).collect();

        let mut zeta_minus_x: Vec<_> = w.iter().map(|w| zeta - w).collect();

        w.iter()
            .take(self.public.len())
            .for_each(|w| zeta_minus_x.push(zetaw - w));

        ark_ff::fields::batch_inversion::<G::ScalarField>(&mut zeta_minus_x);

        //~ 1. Evaluate the negated public polynomial (if present) at $\zeta$ and $\zeta\omega$.
        //~
        //~    NOTE: this works only in the case when the poly segment size is not smaller than that of the domain.
        let p_eval = if !self.public.is_empty() {
            vec![
                vec![
                    (self
                        .public
                        .iter()
                        .zip(zeta_minus_x.iter())
                        .zip(index.domain.elements())
                        .map(|((p, l), w)| -*l * p * w)
                        .fold(G::ScalarField::zero(), |x, y| x + y))
                        * (zeta1 - G::ScalarField::one())
                        * index.domain.size_inv,
                ],
                vec![
                    (self
                        .public
                        .iter()
                        .zip(zeta_minus_x[self.public.len()..].iter())
                        .zip(index.domain.elements())
                        .map(|((p, l), w)| -*l * p * w)
                        .fold(G::ScalarField::zero(), |x, y| x + y))
                        * index.domain.size_inv
                        * (zetaw.pow(&[n as u64]) - G::ScalarField::one()),
                ],
            ]
        } else {
            vec![Vec::<G::ScalarField>::new(), Vec::<G::ScalarField>::new()]
        };

        //~ 1. Absorb the unique evaluation of ft: $ft(\zeta\omega)$.
        fr_sponge.absorb(&self.ft_eval1);

        //~ 1. Absorb all the polynomial evaluations in $\zeta$ and $\zeta\omega$:
        //~~ - the public polynomial
        //~~ - z
        //~~ - generic selector
        //~~ - poseidon selector
        //~~ - the 15 register/witness
        //~~ - 6 sigmas evaluations (the last one is not evaluated)
        fr_sponge.absorb_evaluations([&p_eval[0], &p_eval[1]], [&self.evals[0], &self.evals[1]]);

        //~ 1. Sample $v'$ with the Fr-Sponge.
        let v_chal = fr_sponge.challenge();

        //~ 1. Derive $v$ from $v'$ using the endomorphism (TODO: specify).
        let v = v_chal.to_field(endo_r);

        //~ 1. Sample $u'$ with the Fr-Sponge.
        let u_chal = fr_sponge.challenge();

        //~ 1. Derive $u$ from $u'$ using the endomorphism (TODO: specify).
        let u = u_chal.to_field(endo_r);

        //~ 1. Create a list of all polynomials that have an evaluation proof.
        let evaluation_points = [zeta, zetaw];
        let powers_of_eval_points_for_chunks = [
            zeta.pow(&[index.max_poly_size as u64]),
            zetaw.pow(&[index.max_poly_size as u64]),
        ];

        let polys: Vec<(PolyComm<G>, _)> = self
            .prev_challenges
            .iter()
            .zip(self.prev_chal_evals(index, &evaluation_points, &powers_of_eval_points_for_chunks))
            .map(|(challenge, evals)| {
                let RecursionChallenge { chals: _, comm } = challenge;
                (comm.clone(), evals)
            })
            .collect();

        //~ 1. Compute the evaluation of $ft(\zeta)$.
        let ft_eval0 = {
            let zkp = index.zkpm().evaluate(&zeta);
            let zeta1m1 = zeta1 - G::ScalarField::one();

            let mut alpha_powers =
                all_alphas.get_alphas(ArgumentType::Permutation, permutation::CONSTRAINTS);
            let alpha0 = alpha_powers
                .next()
                .expect("missing power of alpha for permutation");
            let alpha1 = alpha_powers
                .next()
                .expect("missing power of alpha for permutation");
            let alpha2 = alpha_powers
                .next()
                .expect("missing power of alpha for permutation");

            let init = (self.evals[0].w[PERMUTS - 1] + gamma) * self.evals[1].z * alpha0 * zkp;
            let mut ft_eval0 = self.evals[0]
                .w
                .iter()
                .zip(self.evals[0].s.iter())
                .map(|(w, s)| (beta * s) + w + gamma)
                .fold(init, |x, y| x * y);

            ft_eval0 -= if !p_eval[0].is_empty() {
                p_eval[0][0]
            } else {
                G::ScalarField::zero()
            };

            ft_eval0 -= self.evals[0]
                .w
                .iter()
                .zip(index.shift.iter())
                .map(|(w, s)| gamma + (beta * zeta * s) + w)
                .fold(alpha0 * zkp * self.evals[0].z, |x, y| x * y);

            let numerator = ((zeta1m1 * alpha1 * (zeta - index.w()))
                + (zeta1m1 * alpha2 * (zeta - G::ScalarField::one())))
                * (G::ScalarField::one() - self.evals[0].z);

            let denominator = (zeta - index.w()) * (zeta - G::ScalarField::one());
            let denominator = denominator.inverse().expect("negligible probability");

            ft_eval0 += numerator * denominator;

            let cs = Constants {
                alpha,
                beta,
                gamma,
                joint_combiner: joint_combiner.as_ref().map(|j| j.1),
                endo_coefficient: index.endo,
                mds: &G::sponge_params().mds,
            };
            ft_eval0 -= PolishToken::evaluate(
                &index.linearization.constant_term,
                index.domain,
                zeta,
                &self.evals,
                &cs,
            )
            .unwrap();

            ft_eval0
        };

        let combined_inner_product = {
            let ft_eval0 = vec![ft_eval0];
            let ft_eval1 = vec![self.ft_eval1];

            #[allow(clippy::type_complexity)]
            let mut es: Vec<(Vec<Vec<G::ScalarField>>, Option<usize>)> =
                polys.iter().map(|(_, e)| (e.clone(), None)).collect();
            es.push((p_eval.clone(), None));
            es.push((vec![ft_eval0, ft_eval1], None));
            es.push((
                self.evals
                    .iter()
                    .map(|e| vec![e.z.clone()])
                    .collect::<Vec<_>>(),
                None,
            ));
            es.push((
                self.evals
                    .iter()
                    .map(|e| vec![e.generic_selector.clone()])
                    .collect::<Vec<_>>(),
                None,
            ));
            es.push((
                self.evals
                    .iter()
                    .map(|e| vec![e.poseidon_selector.clone()])
                    .collect::<Vec<_>>(),
                None,
            ));
            es.extend(
                (0..COLUMNS)
                    .map(|c| {
                        (
                            self.evals
                                .iter()
                                .map(|e| vec![e.w[c].clone()])
                                .collect::<Vec<_>>(),
                            None,
                        )
                    })
                    .collect::<Vec<_>>(),
            );
            es.extend(
                (0..PERMUTS - 1)
                    .map(|c| {
                        (
                            self.evals
                                .iter()
                                .map(|e| vec![e.s[c].clone()])
                                .collect::<Vec<_>>(),
                            None,
                        )
                    })
                    .collect::<Vec<_>>(),
            );

            combined_inner_product::<G>(&evaluation_points, &v, &u, &es, index.srs().g.len())
        };

        let oracles = RandomOracles {
            beta,
            gamma,
            alpha_chal,
            alpha,
            zeta,
            v,
            u,
            zeta_chal,
            v_chal,
            u_chal,
            joint_combiner,
        };

        Ok(OraclesResult {
            fq_sponge,
            digest,
            oracles,
            all_alphas,
            p_eval,
            powers_of_eval_points_for_chunks,
            polys,
            zeta1,
            ft_eval0,
            combined_inner_product,
        })
    }
}

fn to_batch<'a, G, EFqSponge, EFrSponge>(
    index: &VerifierIndex<G>,
    proof: &'a ProverProof<G>,
) -> Result<BatchEvaluationProof<'a, G, EFqSponge>>
where
    G: KimchiCurve,
    G::BaseField: PrimeField,
    EFqSponge: Clone + FqSponge<G::BaseField, G, G::ScalarField>,
    EFrSponge: FrSponge<G::ScalarField>,
{
    //~
    //~ #### Partial verification
    //~
    //~ For every proof we want to verify, we defer the proof opening to the very end.
    //~ This allows us to potentially batch verify a number of partially verified proofs.
    //~ Essentially, this steps verifies that $f(\zeta) = t(\zeta) * Z_H(\zeta)$.
    //~

    if proof.prev_challenges.len() != index.prev_challenges {
        return Err(VerifyError::IncorrectPrevChallengesLength(
            index.prev_challenges,
            proof.prev_challenges.len(),
        ));
    }

    //~ 1. Commit to the negated public input polynomial.
    let lgr_comm = index
        .srs()
        .lagrange_bases
        .get(&index.domain.size())
        .expect("pre-computed committed lagrange bases not found");
    let com: Vec<_> = lgr_comm
        .iter()
        .map(|c| PolyComm {
            unshifted: vec![*c],
            shifted: None,
        })
        .take(index.public)
        .collect();
    let com_ref: Vec<_> = com.iter().collect();
    if proof.public.len() != index.public {
        return Err(VerifyError::IncorrectPubicInputLength(index.public));
    }
    let elm: Vec<_> = proof.public.iter().map(|s| -*s).collect();
    let p_comm = PolyComm::<G>::multi_scalar_mul(&com_ref, &elm);

    //~ 1. Run the [Fiat-Shamir argument](#fiat-shamir-argument).
    let OraclesResult {
        fq_sponge,
        oracles,
        all_alphas,
        p_eval,
        polys,
        zeta1: zeta_to_domain_size,
        ft_eval0,
        ..
    } = proof.oracles::<EFqSponge, EFrSponge>(index, &p_comm)?;

    //~ 4. Compute the commitment to the linearized polynomial $f$.
    //~    To do this, add the constraints of all of the gates, of the permutation,
    //~    and optionally of the lookup.
    //~    (See the separate sections in the [constraints](#constraints) section.)
    //~    Any polynomial should be replaced by its associated commitment,
    //~    contained in the verifier index or in the proof,
    //~    unless a polynomial has its evaluation provided by the proof
    //~    in which case the evaluation should be used in place of the commitment.
    let f_comm = {
        // the permutation is written manually (not using the expr framework)
        let zkp = index.zkpm().evaluate(&oracles.zeta);

        let alphas = all_alphas.get_alphas(ArgumentType::Permutation, permutation::CONSTRAINTS);

        let mut commitments = vec![&index.sigma_comm[PERMUTS - 1]];
        let mut scalars = vec![ConstraintSystem::perm_scalars(
            &proof.evals,
            oracles.beta,
            oracles.gamma,
            alphas,
            zkp,
        )];

        // generic is written manually (not using the expr framework)
        {
            let alphas =
                all_alphas.get_alphas(ArgumentType::Gate(GateType::Generic), generic::CONSTRAINTS);

            let generic_scalars = &ConstraintSystem::gnrc_scalars(
                alphas,
                &proof.evals[0].w,
                proof.evals[0].generic_selector,
            );

            let generic_com = index.coefficients_comm.iter().take(generic_scalars.len());

            assert_eq!(generic_scalars.len(), generic_com.len());

            scalars.extend(generic_scalars);
            commitments.extend(generic_com);
        }

        // other gates are implemented using the expression framework
        {
            // TODO: Reuse constants from oracles function
            let constants = Constants {
                alpha: oracles.alpha,
                beta: oracles.beta,
                gamma: oracles.gamma,
                joint_combiner: oracles.joint_combiner.as_ref().map(|j| j.1),
                endo_coefficient: index.endo,
                mds: &G::sponge_params().mds,
            };

            for (col, tokens) in &index.linearization.index_terms {
                let scalar = PolishToken::evaluate(
                    tokens,
                    index.domain,
                    oracles.zeta,
                    &proof.evals,
                    &constants,
                )
                .expect("should evaluate");

                use Column::*;
                match col {
                    Witness(i) => {
                        scalars.push(scalar);
                        commitments.push(&proof.commitments.w_comm[*i])
                    }
                    Coefficient(i) => {
                        scalars.push(scalar);
                        commitments.push(&index.coefficients_comm[*i])
                    }
                    Z => {
                        scalars.push(scalar);
                        commitments.push(&proof.commitments.z_comm);
                    }
                    LookupSorted(i) => {
                        let lookup_coms = proof
                            .commitments
                            .lookup
                            .as_ref()
                            .ok_or(VerifyError::LookupCommitmentMissing)?;
                        scalars.push(scalar);
                        commitments.push(&lookup_coms.sorted[*i])
                    }
                    LookupAggreg => {
                        let lookup_coms = proof
                            .commitments
                            .lookup
                            .as_ref()
                            .ok_or(VerifyError::LookupCommitmentMissing)?;
                        scalars.push(scalar);
                        commitments.push(&lookup_coms.aggreg)
                    }
                    LookupKindIndex(i) => match index.lookup_index.as_ref() {
                        None => {
                            panic!("Attempted to use {:?}, but no lookup index was given", col)
                        }
                        Some(lindex) => {
                            scalars.push(scalar);
                            commitments.push(lindex.lookup_selectors[*i].as_ref().expect(
                                &*format!(
                                "Attempted to use {:?}, but it was not found in the verifier index",
                                col
                            ),
                            ));
                        }
                    },
                    LookupTable => panic!("Lookup table is unused in the linearization"),
                    LookupRuntimeSelector => match index.lookup_index.as_ref() {
                        None => {
                            panic!("Attempted to use {:?}, but no lookup index was given", col)
                        }
                        Some(lindex) => match &lindex.runtime_tables_selector {
                            None => panic!("No runtime selector was given"),
                            Some(comm) => {
                                scalars.push(scalar);
                                commitments.push(comm);
                            }
                        },
                    },
                    LookupRuntimeTable => {
                        panic!("runtime lookup table is unused in the linearization")
                    }
                    Index(t) => {
                        use GateType::*;
                        let c = match t {
                            Zero | Generic | Lookup => {
                                panic!("Selector for {:?} not defined", t)
                            }
                            CompleteAdd => &index.complete_add_comm,
                            VarBaseMul => &index.mul_comm,
                            EndoMul => &index.emul_comm,
                            EndoMulScalar => &index.endomul_scalar_comm,
                            Poseidon => &index.psm_comm,
                            ChaCha0 => &index.chacha_comm.as_ref().unwrap()[0],
                            ChaCha1 => &index.chacha_comm.as_ref().unwrap()[1],
                            ChaCha2 => &index.chacha_comm.as_ref().unwrap()[2],
                            ChaChaFinal => &index.chacha_comm.as_ref().unwrap()[3],
                            CairoClaim | CairoInstruction | CairoFlags | CairoTransition => {
                                unimplemented!()
                            }
                            RangeCheck0 => &index.range_check_comm[0],
                            RangeCheck1 => &index.range_check_comm[1],
                        };
                        scalars.push(scalar);
                        commitments.push(c);
                    }
                }
            }
        }

        // MSM
        PolyComm::multi_scalar_mul(&commitments, &scalars)
    };

    //~ 1. Compute the (chuncked) commitment of $ft$
    //~    (see [Maller's optimization](../crypto/plonk/maller_15.html)).
    let ft_comm = {
        let zeta_to_srs_len = oracles.zeta.pow(&[index.max_poly_size as u64]);
        let chunked_f_comm = f_comm.chunk_commitment(zeta_to_srs_len);
        let chunked_t_comm = &proof.commitments.t_comm.chunk_commitment(zeta_to_srs_len);
        &chunked_f_comm - &chunked_t_comm.scale(zeta_to_domain_size - G::ScalarField::one())
    };

    //~ 1. List the polynomial commitments, and their associated evaluations,
    //~    that are associated to the aggregated evaluation proof in the proof:
    let mut evaluations = vec![];

    //~~ - recursion
    evaluations.extend(polys.into_iter().map(|(c, e)| Evaluation {
        commitment: c,
        evaluations: e,
        degree_bound: None,
    }));

    //~~ - public input commitment
    evaluations.push(Evaluation {
        commitment: p_comm,
        evaluations: p_eval,
        degree_bound: None,
    });

    //~~ - ft commitment (chunks of it)
    evaluations.push(Evaluation {
        commitment: ft_comm,
        evaluations: vec![vec![ft_eval0], vec![proof.ft_eval1]],
        degree_bound: None,
    });

    //~~ - permutation commitment
    evaluations.push(Evaluation {
        commitment: proof.commitments.z_comm.clone(),
        evaluations: proof.evals.iter().map(|e| vec![e.z.clone()]).collect(),
        degree_bound: None,
    });

    //~~ - index commitments that use the coefficients
    if !index.generic_comm.is_empty() {
        evaluations.push(Evaluation {
            commitment: index.generic_comm.clone(),
            evaluations: proof
                .evals
                .iter()
                .map(|e| vec![e.generic_selector.clone()])
                .collect(),
            degree_bound: None,
        });
    }

    if !index.psm_comm.is_empty() {
        evaluations.push(Evaluation {
            commitment: index.psm_comm.clone(),
            evaluations: proof
                .evals
                .iter()
                .map(|e| vec![e.poseidon_selector.clone()])
                .collect(),
            degree_bound: None,
        });
    }

    //~~ - witness commitments
    for (i, comm) in proof.commitments.w_comm.iter().enumerate() {
        evaluations.push(Evaluation {
            commitment: comm.clone(),
            evaluations: proof.evals.iter().map(|e| vec![e.w[i].clone()]).collect(),
            degree_bound: None,
        });
    }

    //~~ - sigma commitments
    evaluations.extend(
        index
            .sigma_comm
            .iter()
            .zip(
                (0..PERMUTS - 1)
                    .map(|i| {
                        proof
                            .evals
                            .iter()
                            .map(|e| vec![e.s[i].clone()])
                            .collect::<Vec<_>>()
                    })
                    .collect::<Vec<_>>(),
            )
            .map(|(c, e)| Evaluation {
                commitment: c.clone(),
                evaluations: e,
                degree_bound: None,
            }),
    );

    //~~ - lookup commitments
    if let Some(li) = &index.lookup_index {
        let lookup_comms = proof
            .commitments
            .lookup
            .as_ref()
            .ok_or(VerifyError::LookupCommitmentMissing)?;
        let lookup_eval0 = proof.evals[0]
            .lookup
            .as_ref()
            .ok_or(VerifyError::LookupEvalsMissing)?;
        let lookup_eval1 = proof.evals[1]
            .lookup
            .as_ref()
            .ok_or(VerifyError::LookupEvalsMissing)?;

        // check that the there's as many evals as commitments for sorted polynomials
        let sorted_len = lookup_comms.sorted.len();
        if sorted_len != lookup_eval0.sorted.len() || sorted_len != lookup_eval1.sorted.len() {
            return Err(VerifyError::ProofInconsistentLookup);
        }

        // add evaluations of sorted polynomials
        for (comm, evals0, evals1) in izip!(
            &lookup_comms.sorted,
            lookup_eval0.sorted.clone(),
            lookup_eval1.sorted.clone()
        ) {
            evaluations.push(Evaluation {
                commitment: comm.clone(),
                evaluations: vec![vec![evals0], vec![evals1]],
                degree_bound: None,
            });
        }

        // add evaluations of the aggreg polynomial
        evaluations.push(Evaluation {
            commitment: lookup_comms.aggreg.clone(),
            evaluations: vec![
                vec![lookup_eval0.aggreg.clone()],
                vec![lookup_eval1.aggreg.clone()],
            ],
            degree_bound: None,
        });

        // compute table commitment
        let table_comm = {
            let joint_combiner = oracles
                .joint_combiner
                .expect("joint_combiner should be present if lookups are used");
            let table_id_combiner = joint_combiner.1.pow([li.max_joint_size as u64]);
            let lookup_table: Vec<_> = li.lookup_table.iter().collect();
            let runtime = lookup_comms.runtime.as_ref();

            combine_table(
                &lookup_table,
                joint_combiner.1,
                table_id_combiner,
                li.table_ids.as_ref(),
                runtime,
            )
        };

        // add evaluation of the table polynomial
        evaluations.push(Evaluation {
            commitment: table_comm,
            evaluations: vec![
                vec![lookup_eval0.table.clone()],
                vec![lookup_eval1.table.clone()],
            ],
            degree_bound: None,
        });

        // add evaluation of the runtime table polynomial
        if li.runtime_tables_selector.is_some() {
            let runtime = lookup_comms
                .runtime
                .as_ref()
                .ok_or(VerifyError::IncorrectRuntimeProof)?;
            let runtime_eval0 = lookup_eval0
                .runtime
                .as_ref()
                .cloned()
                .ok_or(VerifyError::IncorrectRuntimeProof)?;
            let runtime_eval1 = lookup_eval1
                .runtime
                .as_ref()
                .cloned()
                .ok_or(VerifyError::IncorrectRuntimeProof)?;

            evaluations.push(Evaluation {
                commitment: runtime.clone(),
                evaluations: vec![vec![runtime_eval0], vec![runtime_eval1]],
                degree_bound: None,
            });
        }
    }

    // prepare for the opening proof verification
    let evaluation_points = vec![oracles.zeta, oracles.zeta * index.domain.group_gen];
    Ok(BatchEvaluationProof {
        sponge: fq_sponge,
        evaluations,
        evaluation_points,
        xi: oracles.v,
        r: oracles.u,
        opening: &proof.proof,
    })
}

/// Verify a proof [ProverProof] using a [VerifierIndex] and a `group_map`.
pub fn verify<G, EFqSponge, EFrSponge>(
    group_map: &G::Map,
    verifier_index: &VerifierIndex<G>,
    proof: &ProverProof<G>,
) -> Result<()>
where
    G: KimchiCurve,
    G::BaseField: PrimeField,
    EFqSponge: Clone + FqSponge<G::BaseField, G, G::ScalarField>,
    EFrSponge: FrSponge<G::ScalarField>,
{
    let proofs = vec![(verifier_index, proof)];
    batch_verify::<G, EFqSponge, EFrSponge>(group_map, &proofs)
}

/// This function verifies the batch of zk-proofs
///     proofs: vector of Plonk proofs
///     index: VerifierIndex
///     RETURN: verification status
pub fn batch_verify<G, EFqSponge, EFrSponge>(
    group_map: &G::Map,
    proofs: &[(&VerifierIndex<G>, &ProverProof<G>)],
) -> Result<()>
where
    G: KimchiCurve,
    G::BaseField: PrimeField,
    EFqSponge: Clone + FqSponge<G::BaseField, G, G::ScalarField>,
    EFrSponge: FrSponge<G::ScalarField>,
{
    //~ #### Batch verification of proofs
    //~
    //~ Below, we define the steps to verify a number of proofs
    //~ (each associated to a [verifier index](#verifier-index)).
    //~ You can, of course, use it to verify a single proof.
    //~

    //~ 1. If there's no proof to verify, the proof validates trivially.
    if proofs.is_empty() {
        return Ok(());
    }

    //~ 1. Ensure that all the proof's verifier index have a URS of the same length. (TODO: do they have to be the same URS though? should we check for that?)
    // TODO: Account for the different SRS lengths
    let srs = &proofs[0].0.srs();
    for (index, _) in proofs.iter() {
        if index.srs().g.len() != srs.g.len() {
            return Err(VerifyError::DifferentSRS);
        }

        // also make sure that the SRS is not smaller than the domain size
        if index.srs().max_degree() < index.domain.size() {
            return Err(VerifyError::SRSTooSmall);
        }
    }

    //~ 1. Validate each proof separately following the [partial verification](#partial-verification) steps.
    let mut batch = vec![];
    for (index, proof) in proofs {
        batch.push(to_batch::<G, EFqSponge, EFrSponge>(index, proof)?);
    }

    //~ 1. Use the [`PolyCom.verify`](#polynomial-commitments) to verify the partially evaluated proofs.
    match srs.verify::<EFqSponge, _>(group_map, &mut batch, &mut thread_rng()) {
        false => Err(VerifyError::OpenProof),
        true => Ok(()),
    }
}
