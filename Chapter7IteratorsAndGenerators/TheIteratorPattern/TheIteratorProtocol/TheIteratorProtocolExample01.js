// Iterable object
let arr = ['foo', 'bar'];

// Iterator factory
console.log(arr[Symbol.iterator]);  // f values() { [native code] }

// Iterator
let iter = arr[Symbol.iterator]();
console.log(iter);  // ArrayIterator {}

// Performing iteration
console.log(iter.next());  // { done: false, value: 'foo' }
console.log(iter.next());  // { done: false, value: 'bar' }
console.log(iter.next());  // { done: true, value: undefined }
IteratorProtocolExample01.js
