...

let p11 = p1.then(() => Error('qux'));

setTimeout(console.log, 0, p11);  // Promise <resolved>: Error: qux 
PromiseThenExample03.js
