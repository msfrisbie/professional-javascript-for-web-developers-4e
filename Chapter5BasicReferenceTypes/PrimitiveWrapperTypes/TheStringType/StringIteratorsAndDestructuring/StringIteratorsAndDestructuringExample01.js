let message = "abc";
let stringIterator = message[Symbol.iterator]();

console.log(stringIterator.next());  // {value: "a", done: false}
console.log(stringIterator.next());  // {value: "b", done: false}
console.log(stringIterator.next());  // {value: "c", done: false}
console.log(stringIterator.next());  // {value: undefined, done: true}
