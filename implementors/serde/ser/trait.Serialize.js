(function() {var implementors = {};
implementors["commitment_dlog"] = [{"text":"impl&lt;C&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.133/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"commitment_dlog/commitment/struct.PolyComm.html\" title=\"struct commitment_dlog::commitment::PolyComm\">PolyComm</a>&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: CanonicalDeserialize + CanonicalSerialize,&nbsp;</span>","synthetic":false,"types":["commitment_dlog::commitment::PolyComm"]},{"text":"impl&lt;G:&nbsp;<a class=\"trait\" href=\"commitment_dlog/commitment/trait.CommitmentCurve.html\" title=\"trait commitment_dlog::commitment::CommitmentCurve\">CommitmentCurve</a>&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.133/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"commitment_dlog/srs/struct.SRS.html\" title=\"struct commitment_dlog::srs::SRS\">SRS</a>&lt;G&gt;","synthetic":false,"types":["commitment_dlog::srs::SRS"]}];
implementors["export_test_vectors"] = [{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.133/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"export_test_vectors/vectors/struct.TestVectors.html\" title=\"struct export_test_vectors::vectors::TestVectors\">TestVectors</a>","synthetic":false,"types":["export_test_vectors::vectors::TestVectors"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.133/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"export_test_vectors/vectors/struct.TestVector.html\" title=\"struct export_test_vectors::vectors::TestVector\">TestVector</a>","synthetic":false,"types":["export_test_vectors::vectors::TestVector"]}];
implementors["kimchi"] = [{"text":"impl&lt;G:&nbsp;<a class=\"trait\" href=\"commitment_dlog/commitment/trait.CommitmentCurve.html\" title=\"trait commitment_dlog::commitment::CommitmentCurve\">CommitmentCurve</a>&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.133/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"kimchi/index/struct.Index.html\" title=\"struct kimchi::index::Index\">Index</a>&lt;G&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;G::ScalarField: <a class=\"trait\" href=\"commitment_dlog/trait.CommitmentField.html\" title=\"trait commitment_dlog::CommitmentField\">CommitmentField</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"kimchi_circuits/nolookup/constraints/struct.ConstraintSystem.html\" title=\"struct kimchi_circuits::nolookup::constraints::ConstraintSystem\">ConstraintSystem</a>&lt;&lt;G as AffineCurve&gt;::ScalarField&gt;: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.133/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.133/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,&nbsp;</span>","synthetic":false,"types":["kimchi::index::Index"]},{"text":"impl&lt;G:&nbsp;<a class=\"trait\" href=\"commitment_dlog/commitment/trait.CommitmentCurve.html\" title=\"trait commitment_dlog::commitment::CommitmentCurve\">CommitmentCurve</a>&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.133/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"kimchi/index/struct.VerifierIndex.html\" title=\"struct kimchi::index::VerifierIndex\">VerifierIndex</a>&lt;G&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"commitment_dlog/commitment/struct.PolyComm.html\" title=\"struct commitment_dlog::commitment::PolyComm\">PolyComm</a>&lt;G&gt;: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.133/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.133/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"commitment_dlog/commitment/struct.PolyComm.html\" title=\"struct commitment_dlog::commitment::PolyComm\">PolyComm</a>&lt;G&gt;: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.133/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.133/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"commitment_dlog/commitment/struct.PolyComm.html\" title=\"struct commitment_dlog::commitment::PolyComm\">PolyComm</a>&lt;G&gt;: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.133/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.133/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"commitment_dlog/commitment/struct.PolyComm.html\" title=\"struct commitment_dlog::commitment::PolyComm\">PolyComm</a>&lt;G&gt;: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.133/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.133/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"commitment_dlog/commitment/struct.PolyComm.html\" title=\"struct commitment_dlog::commitment::PolyComm\">PolyComm</a>&lt;G&gt;: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.133/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.133/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"commitment_dlog/commitment/struct.PolyComm.html\" title=\"struct commitment_dlog::commitment::PolyComm\">PolyComm</a>&lt;G&gt;: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.133/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.133/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"commitment_dlog/commitment/struct.PolyComm.html\" title=\"struct commitment_dlog::commitment::PolyComm\">PolyComm</a>&lt;G&gt;: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.133/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.133/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"commitment_dlog/commitment/struct.PolyComm.html\" title=\"struct commitment_dlog::commitment::PolyComm\">PolyComm</a>&lt;G&gt;: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.133/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.133/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"commitment_dlog/commitment/struct.PolyComm.html\" title=\"struct commitment_dlog::commitment::PolyComm\">PolyComm</a>&lt;G&gt;: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.133/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.133/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"commitment_dlog/commitment/struct.PolyComm.html\" title=\"struct commitment_dlog::commitment::PolyComm\">PolyComm</a>&lt;G&gt;: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.133/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.133/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"commitment_dlog/commitment/struct.PolyComm.html\" title=\"struct commitment_dlog::commitment::PolyComm\">PolyComm</a>&lt;G&gt;: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.133/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.133/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,&nbsp;</span>","synthetic":false,"types":["kimchi::index::VerifierIndex"]}];
implementors["kimchi_circuits"] = [{"text":"impl&lt;F:&nbsp;FftField&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.133/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"kimchi_circuits/domains/struct.EvaluationDomains.html\" title=\"struct kimchi_circuits::domains::EvaluationDomains\">EvaluationDomains</a>&lt;F&gt;","synthetic":false,"types":["kimchi_circuits::domains::EvaluationDomains"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.133/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"kimchi_circuits/expr/enum.Column.html\" title=\"enum kimchi_circuits::expr::Column\">Column</a>","synthetic":false,"types":["kimchi_circuits::expr::Column"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.133/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"kimchi_circuits/expr/struct.Variable.html\" title=\"struct kimchi_circuits::expr::Variable\">Variable</a>","synthetic":false,"types":["kimchi_circuits::expr::Variable"]},{"text":"impl&lt;F&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.133/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"kimchi_circuits/expr/enum.PolishToken.html\" title=\"enum kimchi_circuits::expr::PolishToken\">PolishToken</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.133/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,&nbsp;</span>","synthetic":false,"types":["kimchi_circuits::expr::PolishToken"]},{"text":"impl&lt;E&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.133/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"kimchi_circuits/expr/struct.Linearization.html\" title=\"struct kimchi_circuits::expr::Linearization\">Linearization</a>&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.133/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,&nbsp;</span>","synthetic":false,"types":["kimchi_circuits::expr::Linearization"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.133/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"kimchi_circuits/gate/enum.CurrOrNext.html\" title=\"enum kimchi_circuits::gate::CurrOrNext\">CurrOrNext</a>","synthetic":false,"types":["kimchi_circuits::gate::CurrOrNext"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.133/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"kimchi_circuits/gate/struct.LocalPosition.html\" title=\"struct kimchi_circuits::gate::LocalPosition\">LocalPosition</a>","synthetic":false,"types":["kimchi_circuits::gate::LocalPosition"]},{"text":"impl&lt;F&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.133/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"kimchi_circuits/gate/struct.SingleLookup.html\" title=\"struct kimchi_circuits::gate::SingleLookup\">SingleLookup</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.133/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,&nbsp;</span>","synthetic":false,"types":["kimchi_circuits::gate::SingleLookup"]},{"text":"impl&lt;F&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.133/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"kimchi_circuits/gate/struct.JointLookup.html\" title=\"struct kimchi_circuits::gate::JointLookup\">JointLookup</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.133/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,&nbsp;</span>","synthetic":false,"types":["kimchi_circuits::gate::JointLookup"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.133/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"kimchi_circuits/gate/enum.GateType.html\" title=\"enum kimchi_circuits::gate::GateType\">GateType</a>","synthetic":false,"types":["kimchi_circuits::gate::GateType"]},{"text":"impl&lt;F&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.133/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"kimchi_circuits/gate/struct.LookupInfo.html\" title=\"struct kimchi_circuits::gate::LookupInfo\">LookupInfo</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.133/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a>,&nbsp;</span>","synthetic":false,"types":["kimchi_circuits::gate::LookupInfo"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.133/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"kimchi_circuits/gate/enum.LookupsUsed.html\" title=\"enum kimchi_circuits::gate::LookupsUsed\">LookupsUsed</a>","synthetic":false,"types":["kimchi_circuits::gate::LookupsUsed"]},{"text":"impl&lt;F:&nbsp;FftField&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.133/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"kimchi_circuits/gate/struct.CircuitGate.html\" title=\"struct kimchi_circuits::gate::CircuitGate\">CircuitGate</a>&lt;F&gt;","synthetic":false,"types":["kimchi_circuits::gate::CircuitGate"]},{"text":"impl&lt;F:&nbsp;FftField&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.133/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"kimchi_circuits/nolookup/constraints/struct.ConstraintSystem.html\" title=\"struct kimchi_circuits::nolookup::constraints::ConstraintSystem\">ConstraintSystem</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"kimchi_circuits/domains/struct.EvaluationDomains.html\" title=\"struct kimchi_circuits::domains::EvaluationDomains\">EvaluationDomains</a>&lt;F&gt;: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.133/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.133/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"kimchi_circuits/gate/struct.CircuitGate.html\" title=\"struct kimchi_circuits::gate::CircuitGate\">CircuitGate</a>&lt;F&gt;: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.133/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"https://docs.rs/serde/1.0.133/serde/de/trait.DeserializeOwned.html\" title=\"trait serde::de::DeserializeOwned\">DeserializeOwned</a>,&nbsp;</span>","synthetic":false,"types":["kimchi_circuits::nolookup::constraints::ConstraintSystem"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.133/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"kimchi_circuits/wires/struct.Wire.html\" title=\"struct kimchi_circuits::wires::Wire\">Wire</a>","synthetic":false,"types":["kimchi_circuits::wires::Wire"]}];
implementors["oracle"] = [{"text":"impl&lt;F:&nbsp;Field&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.133/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"oracle/poseidon/struct.ArithmeticSpongeParams.html\" title=\"struct oracle::poseidon::ArithmeticSpongeParams\">ArithmeticSpongeParams</a>&lt;F&gt;","synthetic":false,"types":["oracle::poseidon::ArithmeticSpongeParams"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()