// Attempt to access arguments.callee
// Non-strict mode: Works as expected
// Strict mode: Throws a TypeError
function factorial(num){
  if (num <= 1) {
    return 1;
  } else {
    return num * arguments.callee(num-1)
  }
}
let result = factorial(5); 
