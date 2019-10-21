let p = new Promise(() => {});

setTimeout(console.log, 0, p);                   // Promise <pending>
setTimeout(console.log, 0, Promise.resolve(p));  // Promise <pending>

setTimeout(console.log, 0, p === Promise.resolve(p));  // true
