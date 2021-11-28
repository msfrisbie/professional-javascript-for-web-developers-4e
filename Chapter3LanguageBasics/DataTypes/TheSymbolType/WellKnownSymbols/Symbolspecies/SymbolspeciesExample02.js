class MyArray extends Array {
  // Overwrite species to the parent Array constructor
  static get [Symbol.species]() {
    return Array;
  }
}
let a = new MyArray(1, 2, 3);
let mapped = a.map((x) => x * x);

console.log(a) // MyArray(3) [ 1, 2, 3 ]
console.log(mapped) // [ 1, 4, 9 ]
console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array); // true
