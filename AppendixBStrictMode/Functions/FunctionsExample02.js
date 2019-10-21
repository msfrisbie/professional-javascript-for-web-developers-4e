// Change to named argument value
// Non-strict mode: Change is reflected in arguments
// Strict mode: Change is not reflected in arguments
function showValue(value){
  value = "Foo";
  alert(value);         // "Foo"
  alert(arguments[0]);  // Non-strict mode: "Foo"
                        // Strict mode: "Hi"
}
showValue("Hi");
