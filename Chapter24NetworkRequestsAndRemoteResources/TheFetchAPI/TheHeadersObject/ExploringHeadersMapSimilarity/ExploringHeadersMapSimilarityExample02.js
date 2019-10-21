let seed = [['foo', 'bar']];

let h = new Headers(seed);
let m = new Map(seed);

console.log(h.get('foo'));  // bar 
console.log(m.get('foo'));  // bar 
FetchHeadersExample02.js
