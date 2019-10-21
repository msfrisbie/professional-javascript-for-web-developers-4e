// Create a resolved promise
let p = Promise.resolve();

// Attach a handler to the resolved state.
// Intuitively, this would execute as soon as possible since p is already resolved.
p.then(() => console.log('onResolved handler'));

// Synchronously log to indicate that then() has returned
console.log('then() returns');

// Actual output:
// then() returns
// onResolved handler
NonReentrantExample01.js
