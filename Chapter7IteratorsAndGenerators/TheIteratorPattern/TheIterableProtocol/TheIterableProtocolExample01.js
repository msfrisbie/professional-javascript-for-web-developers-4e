let num = 1;
let obj = {};

// These types do not have iterator factories
console.log(num[Symbol.iterator]);  // undefined
console.log(obj[Symbol.iterator]);  // undefined

let str = 'abc';
let arr = ['a', 'b', 'c'];
let map = new Map().set('a', 1).set('b', 2).set('c', 3);
let set = new Set().add('a').add('b').add('c');
let els = document.querySelectorAll('div');

// These types all have iterator factories
console.log(str[Symbol.iterator]);  // f values() { [native code] }
console.log(arr[Symbol.iterator]);  // f values() { [native code] }
console.log(map[Symbol.iterator]);  // f values() { [native code] }
console.log(set[Symbol.iterator]);  // f values() { [native code] }
console.log(els[Symbol.iterator]);  // f values() { [native code] }

// Invoking the factory function produces an Iterator
console.log(str[Symbol.iterator]());  // StringIterator {}
console.log(arr[Symbol.iterator]());  // ArrayIterator {}
console.log(map[Symbol.iterator]());  // MapIterator {}
console.log(set[Symbol.iterator]());  // SetIterator {}
console.log(els[Symbol.iterator]());  // ArrayIterator {}
IteratorPatternExample01.js
