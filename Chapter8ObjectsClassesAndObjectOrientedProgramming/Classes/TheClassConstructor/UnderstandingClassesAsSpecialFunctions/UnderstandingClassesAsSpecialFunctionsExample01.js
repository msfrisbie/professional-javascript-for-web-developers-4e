class Person {}

console.log(Person);         // class Person {}
console.log(typeof Person);  // function
The class identifier has a prototype property, and the prototype has a constructor property that refers back to the class itself:
class Person{}

console.log(Person.prototype);                         // { constructor: f() }
console.log(Person === Person.prototype.constructor);  // true
