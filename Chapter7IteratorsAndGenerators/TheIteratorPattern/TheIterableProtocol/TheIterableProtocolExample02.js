let arr = ['foo', 'bar', 'baz'];

// for...of loops
for (let el of arr) {
  console.log(el);
}
// foo
// bar
// baz

// Array destructuring
let [a, b, c] = arr;
console.log(a, b, c);  // foo, bar, baz

// Spread operator
let arr2 = [...arr];
console.log(arr2);  // ['foo', 'bar', 'baz']

// Array.from()
let arr3 = Array.from(arr);
console.log(arr3);  // ['foo', 'bar', 'baz']

// Set constructor
let set = new Set(arr);
console.log(set);  // Set(3) {'foo', 'bar', 'baz'}

// Map constructor
let pairs = arr.map((x, i) => [x, i]);
console.log(pairs);  // [['foo', 0], ['bar', 1], ['baz', 2]]
let map = new Map(pairs);  
console.log(map);  // Map(3) { 'foo'=>0, 'bar'=>1, 'baz'=>2 }
IteratorPatternExample02.js
