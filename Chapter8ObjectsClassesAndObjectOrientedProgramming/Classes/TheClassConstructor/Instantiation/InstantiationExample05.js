// The class constructor method is not special and, after instantiation, behaves as a regular instance method (with the same constructor restrictions). Because of this, you are able to reference and use it post-instantiation:
class Person {}

// Create a new instance using the class
let p1 = new Person();
p1.constructor();
// TypeError: Class constructor Person cannot be invoked without 'new'

// Create a new instance using the reference to the class constructor
let p2 = new p1.constructor();