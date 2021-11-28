class Foo {}
let foo = new Foo();

console.log(3 + foo); // "3[object Object]"
console.log(3 - foo); // NaN
console.log(String(foo)); // "[object Object]"

class Bar {
  constructor() {
    this[Symbol.toPrimitive] = function (hint) {
      switch (hint) {
        case "number":
          return 3;
        case "string":
          return "string bar";
        case "default":
        default:
          return "default bar";
      }
    };
  }
}
let bar = new Bar();

console.log(typeof bar); // object
console.log(bar); // Bar { [Symbol(Symbol.toPrimitive)]: [Function] }

// toPrimitive function invoked during a coercing operation 
console.log(3 + bar); // "3default bar"
console.log(3 - bar); // 0
console.log(String(bar)); // "string bar"
