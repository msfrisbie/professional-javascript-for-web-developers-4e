let seed = {foo: 'bar'};

let h = new Headers(seed); 
console.log(h.get('foo'));  // bar 

let m = new Map(seed);
// TypeError: object is not iterable 
FetchHeadersExample04.js
