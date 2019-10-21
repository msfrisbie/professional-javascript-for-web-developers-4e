let arr = ['foo', 'bar'];
let iter1 = arr[Symbol.iterator](); 
let iter2 = arr[Symbol.iterator]();

console.log(iter1.next());  // { done: false, value: 'foo' }
console.log(iter2.next());  // { done: false, value: 'foo' } 
console.log(iter2.next());  // { done: false, value: 'bar' }
console.log(iter1.next());  // { done: false, value: 'bar' }
