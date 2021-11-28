class Bar extends Array {}
class Baz extends Array {
  static get [Symbol.species]() {
    return Array;
  }
}

let bar = new Bar();
console.log(bar instanceof Array); // true
console.log(bar instanceof Bar); // true
bar = bar.concat("bar");
console.log(bar); // Bar(1) [ 'bar' ]
console.log(bar instanceof Array); // true
console.log(bar instanceof Bar); // true

let baz = new Baz();
console.log(baz instanceof Array); // true
console.log(baz instanceof Baz); // true
baz = baz.concat("baz");
console.log(baz); // [ 'baz' ]
console.log(baz instanceof Array); // true
console.log(baz instanceof Baz); // false