let p1 = Promise.all([
  Promise.resolve(), 
  Promise.resolve()
]);

// Elements in the iterable are coerced into a promise using Promise.resolve()
let p2 = Promise.all([3, 4]); 

// Empty iterable is equivalent to Promise.resolve()
let p3 = Promise.all([]);

// Invalid syntax
let p4 = Promise.all();
// TypeError: cannot read Symbol.iterator of undefined
