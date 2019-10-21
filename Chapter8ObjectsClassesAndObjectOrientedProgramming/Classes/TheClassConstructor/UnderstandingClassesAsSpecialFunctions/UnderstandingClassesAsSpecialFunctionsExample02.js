class Person {}

let p = new Person();

console.log(p instanceof Person);  // true
You have likely come to understand that the instanceof operator checks an instance’s prototype chain against a constructor function, which in this example would be checking the instance p against the constructor function Person, which appears to be a class. 
As shown earlier, the class behaves in the same way as a constructor function, and in the context of classes, the class itself is considered the constructor when new is applied to it. Importantly, the constructor method inside the class definition is not considered to be the constructor, and will return false when used with instanceof. If the constructor method is invoked directly, this is the same as using a non-class function constructor, and the instanceof convention will reverse:
class Person {}

let p1 = new Person();

console.log(p1.constructor === Person);         // true
console.log(p1 instanceof Person);              // true
console.log(p1 instanceof Person.constructor);  // false

let p2 = new Person.constructor();

console.log(p2.constructor === Person);         // false 
console.log(p2 instanceof Person);              // false
console.log(p2 instanceof Person.constructor);  // true
