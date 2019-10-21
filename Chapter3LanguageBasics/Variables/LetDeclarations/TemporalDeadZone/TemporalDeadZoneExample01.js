// name is hoisted
console.log(name);  // undefined
var name = 'Matt';

// age is not hoisted
console.log(age);  // ReferenceError: age is not defined
let age = 26; 
