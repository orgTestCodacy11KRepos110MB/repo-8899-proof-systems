use ark_ff::{FftField, PrimeField};
use ark_ec::AffineCurve;

use super::plonk::Plonk;
use super::ipa::Accumulator;

/// State to pass-through to "Wrap" proof:
struct PassThrough {}

struct Proof<A: AffineCurve> {
    pass: PassThrough,
    accum: Accumulator<A::ScalarField>, // accumulator for the polynomial commitment scheme
    plonk: Plonk<A>,       // plonk proof
}

///
///
/// TODO: Implements serde::Serialize / serde::Deserialize
struct Minimal {}

/*
impl Into<Proof> for Minimal {

}

impl Into<Minimal> for Proof {

}
*/
