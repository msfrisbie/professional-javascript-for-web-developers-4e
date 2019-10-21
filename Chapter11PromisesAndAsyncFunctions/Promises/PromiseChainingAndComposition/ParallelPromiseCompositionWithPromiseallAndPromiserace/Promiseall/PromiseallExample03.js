// Will forever remain pending
let p1 = Promise.all([new Promise(() => {})]);
setTimeout(console.log, 0, p1);  // Promise <pending>

// Single rejection causes rejection of composed promise
let p2 = Promise.all([
  Promise.resolve(), 
  Promise.reject(), 
  Promise.resolve()
]);
setTimeout(console.log, 0, p2);  // Promise <rejected>

// Uncaught (in promise) undefined 
