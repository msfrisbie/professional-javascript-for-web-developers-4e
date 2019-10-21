let p1 = new Promise((resolve, reject) => resolve());
setTimeout(console.log, 0, p1);  // Promise <resolved>

let p2 = new Promise((resolve, reject) => reject());
setTimeout(console.log, 0, p2);  // Promise <rejected>
// Uncaught error (in promise)
