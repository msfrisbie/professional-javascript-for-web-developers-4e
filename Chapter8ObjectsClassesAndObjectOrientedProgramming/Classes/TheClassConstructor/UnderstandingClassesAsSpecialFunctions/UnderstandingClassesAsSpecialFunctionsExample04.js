// Similar to an immediately invoked function expression, a class can also be immediately instantiated:
// Because it is a class expression, the class name is optional
let p = new class Foo {
  constructor(x) {
    console.log(x);
  }
}('bar');        // bar

console.log(p);  // Foo {}