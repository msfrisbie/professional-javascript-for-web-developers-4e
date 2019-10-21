
...

// Promise.resolve() preserves the returned promise
let p9 = p1.finally(() => new Promise(() => {}));
let p10 = p1.finally(() => Promise.reject());
// Uncaught (in promise): undefined

setTimeout(console.log, 0, p9);  // Promise <pending>
setTimeout(console.log, 0, p10);  // Promise <rejected>: undefined

let p11 = p1.finally(() => { throw 'baz';});
// Uncaught (in promise) baz

setTimeout(console.log, 0, p11);  // Promise <rejected>: baz
PromiseFinallyExample03.js
