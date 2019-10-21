/**
 * Constructor function can exist as function expression
 * or function declaration, so both of these are suitable:
 *   function Person {}
 *   let Person = function() {}
 */
function Person() {}

/** 
 * Upon declaration, the constructor function already
 * has a prototype object associated with it:
 */
console.log(typeof Person.prototype);
console.log(Person.prototype);
// {
//   constructor: f Person(),
//   __proto__: Object
// }

/**
 * As mentioned previously, the constructor function has
 * a 'prototype' reference to the prototype object, and
 * the prototype object has a 'constructor' reference to
 * the constructor function. These references are cyclical:
 */
console.log(Person.prototype.constructor === Person);  // true

/**
 * Any normal prototype chain will terminate at the Object prototype.
 * The prototype of the Object prototype is null.
 */
console.log(Person.prototype.__proto__ === Object.prototype);    // true
console.log(Person.prototype.__proto__.constructor === Object);  // true
console.log(Person.prototype.__proto__.__proto__ === null);      // true

console.log(Person.prototype.__proto__);  
// {
//   constructor: f Object(),
//   toString: ...
//   hasOwnProperty: ...
//   isPrototypeOf: ...
//   ...
// }


let person1 = new Person(),
    person2 = new Person();

/**
 * The constructor, the prototype object, and an instance
 * are three completely distinct objects:
 */
console.log(person1 !== Person);            // true
console.log(person1 !== Person.prototype);  // true
console.log(Person.prototype !== person);   // true

/**
  * An instance is linked to the prototype through __proto__, which
  * is the literal manifestation of the [[Prototype]] hidden property.
  *
  * A constructor is linked to the prototype through the constructor property.
  * 
  * An instance has no direct link to the constructor, only through the prototype.
  */
console.log(person1.__proto__ === Person.prototype);    // true
conosle.log(person1.__proto__.constructor === Person);  // true
  
/**
 * Two instances created from the same constructor function will share
 * a prototype object:
 */
console.log(person1.__proto__ === person2.__proto__);  // true 

/**
 * instanceof will check the instance's prototype chain against the
 * prototype property of a constructor function:
 */
console.log(person1 instanceof Person);           // true
console.log(person1 instanceof Object);           // true
console.log(Person.prototype instanceof Object);  // true 
