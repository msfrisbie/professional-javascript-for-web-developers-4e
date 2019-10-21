let arr = ['foo'];
let iter = arr[Symbol.iterator]();
console.log(iter.next());  // { done: false, value: 'foo' }
console.log(iter.next());  // { done: true, value: undefined } 
console.log(iter.next());  // { done: true, value: undefined }
console.log(iter.next());  // { done: true, value: undefined }
