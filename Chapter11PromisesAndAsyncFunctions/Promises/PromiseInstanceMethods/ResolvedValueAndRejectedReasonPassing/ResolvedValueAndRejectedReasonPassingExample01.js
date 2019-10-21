let p1 = new Promise((resolve, reject) => resolve('foo'));
p1.then((value) => console.log(value));     // foo

let p2 = new Promise((resolve, reject) => reject('bar'));
p2.catch((reason) => console.log(reason));  // bar
ReasonPassingExample01.js
