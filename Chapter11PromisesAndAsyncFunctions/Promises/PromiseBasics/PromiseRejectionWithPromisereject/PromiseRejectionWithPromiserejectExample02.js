let p = Promise.reject(3);
setTimeout(console.log, 0, p);  // Promise <rejected>: 3

p.then(null, (e) => setTimeout(console.log, 0, e));  // 3
