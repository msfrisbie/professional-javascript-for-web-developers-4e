class Person {}

let p = new Person();

console.log(p instanceof Person);  // true
// You have likely come to understand that the instanceof operator checks an instance’s prototype chain against a constructor function, which in this example would be checking the instance p against the constructor function Person, which appears to be a class. 
