Promise.reject(Error('foo'));
console.log('bar');
// bar

// Uncaught (in promise) Error: foo
As demonstrated earlier in this chapter with Promise.reject(), an asynchronous error can be caught only with an asynchronous onRejection handler. 
// Correct
Promise.reject(Error('foo')).catch((e) => {});

// Incorrect
try {
  Promise.reject(Error('foo'));
} catch(e) {}
This does not apply to catching the error while still inside the executor, where try/catch will still suffice to catch the error before it rejects the promise:
let p = new Promise((resolve, reject) => {
  try {
    throw Error('foo');
  } catch(e) {}

  resolve('bar');
});

setTimeout(console.log, 0, p);  // Promise <resolved>: bar
