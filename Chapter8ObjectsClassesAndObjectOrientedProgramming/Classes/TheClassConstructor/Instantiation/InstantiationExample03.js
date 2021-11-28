// By default, the constructor will return the this object after execution. If an object is returned from the constructor function, that value will be used as the instantiated object and the newly created this object will be discarded if a reference to it is not preserved. However, if a different object is returned, the returned object will not be associated with the class via instanceof because its prototype pointer was never modified.
class Person {
  constructor(override) {
    this.foo = "foo";
    if (override) {
      return {
        bar: "bar",
      };
    }
  }
}

let p1 = new Person(),
  p2 = new Person(true);

console.log(p1); // Person{ foo: 'foo' }
console.log(p1 instanceof Person); // true

console.log(p2); // { bar: 'bar' }
console.log(p2 instanceof Person); // false