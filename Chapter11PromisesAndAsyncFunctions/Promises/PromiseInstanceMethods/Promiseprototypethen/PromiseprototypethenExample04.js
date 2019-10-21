let p1 = Promise.resolve('foo');

// Calling then() with no handler function acts as a passthrough
let p2 = p1.then();

setTimeout(console.log, 0, p2);  // Promise <resolved>: foo

// These are equivalent
let p3 = p1.then(() => undefined);
let p4 = p1.then(() => {});
let p5 = p1.then(() => Promise.resolve());

setTimeout(console.log, 0, p3);  // Promise <resolved>: undefined
setTimeout(console.log, 0, p4);  // Promise <resolved>: undefined
setTimeout(console.log, 0, p5);  // Promise <resolved>: undefined 
PromiseThenExample03.js
