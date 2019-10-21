let p = new Promise((resolve, reject) => {
  setTimeout(reject, 10000);  // After 10 seconds, invoke reject()

  // Do executor things
});

setTimeout(console.log, 0, p);      // Promise <pending>
setTimeout(console.log, 11000, p);  // Check state after 11 seconds

// (After 10 seconds) Uncaught error
// (After 11 seconds) Promise <rejected>
