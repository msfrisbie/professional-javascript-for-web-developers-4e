let p = Promise.all([
  Promise.resolve(3), 
  Promise.resolve(), 
  Promise.resolve(4)
]);

p.then((values) => setTimeout(console.log, 0, values));  // [3, undefined, 4]
