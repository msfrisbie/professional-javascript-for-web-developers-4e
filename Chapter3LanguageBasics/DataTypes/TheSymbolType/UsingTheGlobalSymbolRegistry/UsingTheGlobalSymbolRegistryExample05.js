// Create global symbol
let s = Symbol.for('foo');
console.log(Symbol.keyFor(s));   // foo

// Create regular symbol
let s2 = Symbol('bar');
console.log(Symbol.keyFor(s2));  // undefined
