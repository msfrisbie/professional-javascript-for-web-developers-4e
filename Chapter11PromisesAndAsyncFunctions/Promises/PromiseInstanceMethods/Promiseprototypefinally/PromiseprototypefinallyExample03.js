let p1 = Promise.resolve('foo');

// These all act as a passthrough
let p2 = p1.finally();
let p3 = p1.finally(() => undefined);
let p4 = p1.finally(() => {});
let p5 = p1.finally(() => Promise.resolve());
let p6 = p1.finally(() => 'bar');
let p7 = p1.finally(() => Promise.resolve('bar'));
let p8 = p1.finally(() => Error('qux'));

setTimeout(console.log, 0, p2);  // Promise <resolved>: foo
setTimeout(console.log, 0, p3);  // Promise <resolved>: foo
setTimeout(console.log, 0, p4);  // Promise <resolved>: foo
setTimeout(console.log, 0, p5);  // Promise <resolved>: foo
setTimeout(console.log, 0, p6);  // Promise <resolved>: foo
setTimeout(console.log, 0, p7);  // Promise <resolved>: foo
setTimeout(console.log, 0, p8);  // Promise <resolved>: foo 
PromiseFinallyExample03.js
