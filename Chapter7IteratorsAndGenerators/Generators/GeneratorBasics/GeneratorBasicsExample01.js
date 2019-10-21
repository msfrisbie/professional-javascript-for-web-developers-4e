// Generator function declaration
function* generatorFn() {}

// Generator function expression
let generatorFn = function* () {}

// Object literal method generator function
let foo = {
  * generatorFn() {}
}

// Class instance method generator function
class Foo {
  * generatorFn() {}
}

// Class static method generator function
class Bar {
  static * generatorFn() {}
}
