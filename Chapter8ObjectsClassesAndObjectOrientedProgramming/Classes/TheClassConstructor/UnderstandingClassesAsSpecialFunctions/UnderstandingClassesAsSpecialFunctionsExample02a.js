// As shown earlier, the class behaves in the same way as a constructor function, and in the context of classes, the class itself is considered the constructor when new is applied to it. Importantly, the constructor method inside the class definition is not considered to be the constructor, and will return false when used with instanceof. 
class Person {}

let p1 = new Person();

console.log(p1.constructor === Person);         // true
console.log(p1 instanceof Person);              // true
console.log(p1 instanceof Person.constructor);  // false

// If the constructor method is invoked directly, this is the same as using a non-class function constructor, and the instanceof convention will reverse:
let p2 = new Person.constructor();

console.log(p2.constructor === Person);         // false 
console.log(p2 instanceof Person);              // false
console.log(p2 instanceof Person.constructor);  // true
