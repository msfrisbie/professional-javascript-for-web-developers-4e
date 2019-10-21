let p1 = new Promise(() => {});
let p2 = p1.finally();
setTimeout(console.log, 0, p1);         // Promise <pending>
setTimeout(console.log, 0, p2);         // Promise <pending>
setTimeout(console.log, 0, p1 === p2);  // false
