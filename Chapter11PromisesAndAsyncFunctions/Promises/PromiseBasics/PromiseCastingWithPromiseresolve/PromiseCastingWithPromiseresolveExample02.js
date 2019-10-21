setTimeout(console.log, 0, Promise.resolve());
// Promise <resolved>: undefined

setTimeout(console.log, 0, Promise.resolve(3));
// Promise <resolved>: 3

// Additional arguments are ignored
setTimeout(console.log, 0, Promise.resolve(4, 5, 6));
// Promise <resolved>: 4
