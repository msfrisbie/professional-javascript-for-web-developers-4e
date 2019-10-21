let p = new Promise(() => {});
setTimeout(console.log, 0, p);  // Promise <pending>
