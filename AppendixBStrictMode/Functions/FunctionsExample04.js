// Function declaration in an if statement
// Non-strict mode: Function hoisted outside of if statement
// Strict mode: Throws a syntax error
if (true){
  function doSomething(){
    // ...
  }
}
