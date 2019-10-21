// Two properties with the same name
// Non-strict mode: No error, second property wins
// Strict mode: Throws a syntax error
let person = {
  name: "Nicholas",
  name: "Greg"
};
