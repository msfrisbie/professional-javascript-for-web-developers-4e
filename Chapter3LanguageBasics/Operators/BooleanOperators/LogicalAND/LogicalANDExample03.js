let found = false;
let result = (found && someUndeclaredVariable);  // no error
console.log(result);  // works
