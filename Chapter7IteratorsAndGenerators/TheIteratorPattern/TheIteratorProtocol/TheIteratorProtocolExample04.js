let arr = ['foo', 'baz'];
let iter = arr[Symbol.iterator]();

console.log(iter.next());  // { done: false, value: 'foo' }

// Insert value in the middle of array
arr.splice(1, 0, 'bar'); 

console.log(iter.next());  // { done: false, value: 'bar' }
console.log(iter.next());  // { done: false, value: 'baz' }
console.log(iter.next());  // { done: true, value: undefined }
