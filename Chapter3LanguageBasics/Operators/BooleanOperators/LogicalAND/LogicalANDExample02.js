let found = true;
let result = (found && someUndeclaredVariable);  // error occurs here
console.log(result);  // this line never executes
