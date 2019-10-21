let p1 = Promise.race([
  Promise.resolve(), 
  Promise.resolve()
]);

// Elements in the iterable are coerced into a promise using Promise.resolve()
let p2 = Promise.race([3, 4]); 

// Empty iterable is equivalent to nes Promise(() => {})
let p3 = Promise.race([]);

// Invalid syntax
let p4 = Promise.race();
// TypeError: cannot read Symbol.iterator of undefined
