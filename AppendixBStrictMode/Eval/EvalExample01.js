// eval() used to create a variable
// Non-strict mode: Alert displays 10
// Strict mode: Throws an ReferenceError when alert(x) is called
function doSomething(){
  eval("let x = 10");
  alert(x);
}
