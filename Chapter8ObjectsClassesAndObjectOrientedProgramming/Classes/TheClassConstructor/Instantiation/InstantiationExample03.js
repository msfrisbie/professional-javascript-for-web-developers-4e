class Person {
  constructor(override) {
    this.foo = 'foo';
    if (override) {
      return {
        bar: 'bar'
      };
    }
  }
}

let p1 = new Person(),
    p2 = new Person(true);

console.log(p1);                    // Person{ foo: 'foo' }
console.log(p1 instanceof Person);  // true

console.log(p2);                    // { bar: 'bar' }
console.log(p2 instanceof Person);  // false 
ClassInstantiationExample03.js
One major departure from function constructors is that the use of the new operator with class constructors is mandatory. With function constructors, when electing not to use the new operator, the constructor would use the global this value—typically the window object—inside the constructor. With class constructors, neglecting to use the new operator will throw an error:
function Person() {}

class Animal {}

// Constructs instance using window as 'this'
let p = Person();

let a = Animal();
// TypeError: class constructor Animal cannot be invoked without 'new' 
ClassInstantiationExample04.js
