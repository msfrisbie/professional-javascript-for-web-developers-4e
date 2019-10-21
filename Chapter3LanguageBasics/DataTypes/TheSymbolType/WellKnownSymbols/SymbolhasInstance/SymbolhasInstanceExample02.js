function Foo() {}
let f = new Foo();
console.log(Foo[Symbol.hasInstance](f));  // true

class Bar {}
let b = new Bar();
console.log(Bar[Symbol.hasInstance](b));  // true
