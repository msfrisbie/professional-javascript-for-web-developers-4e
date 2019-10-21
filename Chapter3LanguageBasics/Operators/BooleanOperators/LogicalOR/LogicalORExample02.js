let found = true;
let result = (found || someUndeclaredVariable);  // no error
console.log(result);  // works
