(function() {var implementors = {
"commitment_dlog":[["impl&lt;'de, C&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"commitment_dlog/commitment/struct.PolyComm.html\" title=\"struct commitment_dlog::commitment::PolyComm\">PolyComm</a>&lt;C&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: CanonicalDeserialize + CanonicalSerialize,</span>"],["impl&lt;'de, G&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"commitment_dlog/commitment/struct.BlindedCommitment.html\" title=\"struct commitment_dlog::commitment::BlindedCommitment\">BlindedCommitment</a>&lt;G&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;G: <a class=\"trait\" href=\"commitment_dlog/commitment/trait.CommitmentCurve.html\" title=\"trait commitment_dlog::commitment::CommitmentCurve\">CommitmentCurve</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;G: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;,</span>"],["impl&lt;'de, G:&nbsp;AffineCurve&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"commitment_dlog/evaluation_proof/struct.OpeningProof.html\" title=\"struct commitment_dlog::evaluation_proof::OpeningProof\">OpeningProof</a>&lt;G&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;G: CanonicalDeserialize + CanonicalSerialize,</span>"],["impl&lt;'de, G:&nbsp;<a class=\"trait\" href=\"commitment_dlog/commitment/trait.CommitmentCurve.html\" title=\"trait commitment_dlog::commitment::CommitmentCurve\">CommitmentCurve</a>&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"commitment_dlog/srs/struct.SRS.html\" title=\"struct commitment_dlog::srs::SRS\">SRS</a>&lt;G&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;G: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;G::ScalarField: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;G::BaseField: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</span>"]],
"kimchi":[["impl&lt;'de, F&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"kimchi/alphas/struct.Alphas.html\" title=\"struct kimchi::alphas::Alphas\">Alphas</a>&lt;F&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;,</span>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"kimchi/circuits/argument/enum.ArgumentType.html\" title=\"enum kimchi::circuits::argument::ArgumentType\">ArgumentType</a>"],["impl&lt;'de, F:&nbsp;PrimeField&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"kimchi/circuits/constraints/struct.ConstraintSystem.html\" title=\"struct kimchi::circuits::constraints::ConstraintSystem\">ConstraintSystem</a>&lt;F&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"kimchi/circuits/domains/struct.EvaluationDomains.html\" title=\"struct kimchi::circuits::domains::EvaluationDomains\">EvaluationDomains</a>&lt;F&gt;: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"kimchi/circuits/gate/struct.CircuitGate.html\" title=\"struct kimchi::circuits::gate::CircuitGate\">CircuitGate</a>&lt;F&gt;: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;[<a class=\"struct\" href=\"kimchi/circuits/gate/struct.SelectorPolynomial.html\" title=\"struct kimchi::circuits::gate::SelectorPolynomial\">SelectorPolynomial</a>&lt;F&gt;; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">2</a>]: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"kimchi/circuits/gate/struct.SelectorPolynomial.html\" title=\"struct kimchi::circuits::gate::SelectorPolynomial\">SelectorPolynomial</a>&lt;F&gt;&gt;: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"kimchi/circuits/gate/struct.SelectorPolynomial.html\" title=\"struct kimchi::circuits::gate::SelectorPolynomial\">SelectorPolynomial</a>&lt;F&gt;&gt;: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"kimchi/circuits/lookup/index/struct.LookupConstraintSystem.html\" title=\"struct kimchi::circuits::lookup::index::LookupConstraintSystem\">LookupConstraintSystem</a>&lt;F&gt;: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</span>"],["impl&lt;'de, F:&nbsp;FftField&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"kimchi/circuits/domain_constant_evaluation/struct.DomainConstantEvaluations.html\" title=\"struct kimchi::circuits::domain_constant_evaluation::DomainConstantEvaluations\">DomainConstantEvaluations</a>&lt;F&gt;"],["impl&lt;'de, F:&nbsp;FftField&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"kimchi/circuits/domains/struct.EvaluationDomains.html\" title=\"struct kimchi::circuits::domains::EvaluationDomains\">EvaluationDomains</a>&lt;F&gt;"],["impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"kimchi/circuits/expr/enum.Column.html\" title=\"enum kimchi::circuits::expr::Column\">Column</a>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"kimchi/circuits/expr/struct.Variable.html\" title=\"struct kimchi::circuits::expr::Variable\">Variable</a>"],["impl&lt;'de, F&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"kimchi/circuits/expr/enum.PolishToken.html\" title=\"enum kimchi::circuits::expr::PolishToken\">PolishToken</a>&lt;F&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;,</span>"],["impl&lt;'de, E&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"kimchi/circuits/expr/struct.Linearization.html\" title=\"struct kimchi::circuits::expr::Linearization\">Linearization</a>&lt;E&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;,</span>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"kimchi/circuits/gate/enum.CurrOrNext.html\" title=\"enum kimchi::circuits::gate::CurrOrNext\">CurrOrNext</a>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"kimchi/circuits/gate/enum.GateType.html\" title=\"enum kimchi::circuits::gate::GateType\">GateType</a>"],["impl&lt;'de, F:&nbsp;PrimeField&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"kimchi/circuits/gate/struct.SelectorPolynomial.html\" title=\"struct kimchi::circuits::gate::SelectorPolynomial\">SelectorPolynomial</a>&lt;F&gt;"],["impl&lt;'de, F:&nbsp;PrimeField&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"kimchi/circuits/gate/struct.CircuitGate.html\" title=\"struct kimchi::circuits::gate::CircuitGate\">CircuitGate</a>&lt;F&gt;"],["impl&lt;'de, F:&nbsp;FftField&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"kimchi/circuits/lookup/constraints/struct.LookupConfiguration.html\" title=\"struct kimchi::circuits::lookup::constraints::LookupConfiguration\">LookupConfiguration</a>&lt;F&gt;"],["impl&lt;'de, T&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"kimchi/circuits/lookup/index/struct.LookupSelectors.html\" title=\"struct kimchi::circuits::lookup::index::LookupSelectors\">LookupSelectors</a>&lt;T&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;,</span>"],["impl&lt;'de, F:&nbsp;FftField&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"kimchi/circuits/lookup/index/struct.LookupConstraintSystem.html\" title=\"struct kimchi::circuits::lookup::index::LookupConstraintSystem\">LookupConstraintSystem</a>&lt;F&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"kimchi/circuits/lookup/constraints/struct.LookupConfiguration.html\" title=\"struct kimchi::circuits::lookup::constraints::LookupConfiguration\">LookupConfiguration</a>&lt;F&gt;: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,</span>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"kimchi/circuits/lookup/lookups/enum.LookupsUsed.html\" title=\"enum kimchi::circuits::lookup::lookups::LookupsUsed\">LookupsUsed</a>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"kimchi/circuits/lookup/lookups/struct.LookupInfo.html\" title=\"struct kimchi::circuits::lookup::lookups::LookupInfo\">LookupInfo</a>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"kimchi/circuits/lookup/lookups/struct.LocalPosition.html\" title=\"struct kimchi::circuits::lookup::lookups::LocalPosition\">LocalPosition</a>"],["impl&lt;'de, F&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"kimchi/circuits/lookup/lookups/struct.SingleLookup.html\" title=\"struct kimchi::circuits::lookup::lookups::SingleLookup\">SingleLookup</a>&lt;F&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;,</span>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"kimchi/circuits/lookup/lookups/enum.LookupTableID.html\" title=\"enum kimchi::circuits::lookup::lookups::LookupTableID\">LookupTableID</a>"],["impl&lt;'de, SingleLookup, LookupTableID&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"kimchi/circuits/lookup/lookups/struct.JointLookup.html\" title=\"struct kimchi::circuits::lookup::lookups::JointLookup\">JointLookup</a>&lt;SingleLookup, LookupTableID&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;SingleLookup: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;LookupTableID: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt;,</span>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"kimchi/circuits/lookup/lookups/enum.LookupPattern.html\" title=\"enum kimchi::circuits::lookup::lookups::LookupPattern\">LookupPattern</a>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"kimchi/circuits/lookup/runtime_tables/struct.RuntimeTableSpec.html\" title=\"struct kimchi::circuits::lookup::runtime_tables::RuntimeTableSpec\">RuntimeTableSpec</a>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"enum\" href=\"kimchi/circuits/lookup/tables/enum.GateLookupTable.html\" title=\"enum kimchi::circuits::lookup::tables::GateLookupTable\">GateLookupTable</a>"],["impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"kimchi/circuits/wires/struct.Wire.html\" title=\"struct kimchi::circuits::wires::Wire\">Wire</a>"],["impl&lt;'de, Field&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"kimchi/proof/struct.LookupEvaluations.html\" title=\"struct kimchi::proof::LookupEvaluations\">LookupEvaluations</a>&lt;Field&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;SerdeAs&gt;: <a class=\"trait\" href=\"https://docs.rs/serde_with/1.14.0/serde_with/de/trait.DeserializeAs.html\" title=\"trait serde_with::de::DeserializeAs\">DeserializeAs</a>&lt;'de, Field&gt;,</span>"],["impl&lt;'de, Field&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"kimchi/proof/struct.ProofEvaluations.html\" title=\"struct kimchi::proof::ProofEvaluations\">ProofEvaluations</a>&lt;Field&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;SerdeAs&gt;: <a class=\"trait\" href=\"https://docs.rs/serde_with/1.14.0/serde_with/de/trait.DeserializeAs.html\" title=\"trait serde_with::de::DeserializeAs\">DeserializeAs</a>&lt;'de, Field&gt;,</span>"],["impl&lt;'de, G:&nbsp;AffineCurve&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"kimchi/proof/struct.LookupCommitments.html\" title=\"struct kimchi::proof::LookupCommitments\">LookupCommitments</a>&lt;G&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;G: CanonicalDeserialize + CanonicalSerialize,</span>"],["impl&lt;'de, G:&nbsp;AffineCurve&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"kimchi/proof/struct.ProverCommitments.html\" title=\"struct kimchi::proof::ProverCommitments\">ProverCommitments</a>&lt;G&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;G: CanonicalDeserialize + CanonicalSerialize,</span>"],["impl&lt;'de, G:&nbsp;AffineCurve&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"kimchi/proof/struct.ProverProof.html\" title=\"struct kimchi::proof::ProverProof\">ProverProof</a>&lt;G&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;G: CanonicalDeserialize + CanonicalSerialize,</span>"],["impl&lt;'de, G&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"kimchi/proof/struct.RecursionChallenge.html\" title=\"struct kimchi::proof::RecursionChallenge\">RecursionChallenge</a>&lt;G&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;G: AffineCurve,<br>&nbsp;&nbsp;&nbsp;&nbsp;G: CanonicalDeserialize + CanonicalSerialize,</span>"],["impl&lt;'de, G:&nbsp;<a class=\"trait\" href=\"kimchi/curve/trait.KimchiCurve.html\" title=\"trait kimchi::curve::KimchiCurve\">KimchiCurve</a>&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"kimchi/prover_index/struct.ProverIndex.html\" title=\"struct kimchi::prover_index::ProverIndex\">ProverIndex</a>&lt;G&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"kimchi/circuits/constraints/struct.ConstraintSystem.html\" title=\"struct kimchi::circuits::constraints::ConstraintSystem\">ConstraintSystem</a>&lt;G::ScalarField&gt;: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;G: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</span>"],["impl&lt;'de, G:&nbsp;CommitmentCurve&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"kimchi/verifier_index/struct.LookupVerifierIndex.html\" title=\"struct kimchi::verifier_index::LookupVerifierIndex\">LookupVerifierIndex</a>&lt;G&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;PolyComm&lt;G&gt;: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;PolyComm&lt;G&gt;: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;PolyComm&lt;G&gt;: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;PolyComm&lt;G&gt;: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,</span>"],["impl&lt;'de, G:&nbsp;<a class=\"trait\" href=\"kimchi/curve/trait.KimchiCurve.html\" title=\"trait kimchi::curve::KimchiCurve\">KimchiCurve</a>&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"kimchi/verifier_index/struct.VerifierIndex.html\" title=\"struct kimchi::verifier_index::VerifierIndex\">VerifierIndex</a>&lt;G&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;PolyComm&lt;G&gt;: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;PolyComm&lt;G&gt;: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;PolyComm&lt;G&gt;: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;PolyComm&lt;G&gt;: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;PolyComm&lt;G&gt;: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;PolyComm&lt;G&gt;: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;PolyComm&lt;G&gt;: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;PolyComm&lt;G&gt;: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;PolyComm&lt;G&gt;: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;PolyComm&lt;G&gt;: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;PolyComm&lt;G&gt;&gt;: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;PolyComm&lt;G&gt;&gt;: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;PolyComm&lt;G&gt;: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;G: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;G::ScalarField: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</span>"]],
"mina_poseidon":[["impl&lt;'de, F:&nbsp;Field&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"mina_poseidon/poseidon/struct.ArithmeticSpongeParams.html\" title=\"struct mina_poseidon::poseidon::ArithmeticSpongeParams\">ArithmeticSpongeParams</a>&lt;F&gt;"]],
"o1_utils":[["impl&lt;'de, F&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.137/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"o1_utils/chunked_evaluations/struct.ChunkedEvaluations.html\" title=\"struct o1_utils::chunked_evaluations::ChunkedEvaluations\">ChunkedEvaluations</a>&lt;F&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: PrimeField,</span>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()