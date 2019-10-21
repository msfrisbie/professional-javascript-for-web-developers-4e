let h = new Headers();
let m = new Map();

// Set key
h.set('foo', 'bar');
m.set('foo', 'bar');

// Check for key
console.log(h.has('foo'));  // true 
console.log(m.has('foo'));  // true 
console.log(h.has('qux'));  // false 
console.log(m.has('qux'));  // false

// Get value
console.log(h.get('foo'));  // bar
console.log(m.get('foo'));  // bar

// Replace value
h.set('foo', 'baz'); 
m.set('foo', 'baz');

// Get replaced value
console.log(h.get('foo'));  // baz
console.log(m.get('foo'));  // baz

// Remove value
h.delete('foo');
m.delete('foo');

// Check that value is removed
console.log(h.get('foo'));  // undefined
console.log(m.get('foo'));  // undefined 
FetchHeadersExample01.js
