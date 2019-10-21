function add10(num) {
  return num + 10;
}
                   
let result1 = callSomeFunction(add10, 10);
console.log(result1);  // 20
                   
function getGreeting(name) {
  return "Hello, " + name;
}
                   
let result2 = callSomeFunction(getGreeting, "Nicholas");
console.log(result2);   // "Hello, Nicholas"
