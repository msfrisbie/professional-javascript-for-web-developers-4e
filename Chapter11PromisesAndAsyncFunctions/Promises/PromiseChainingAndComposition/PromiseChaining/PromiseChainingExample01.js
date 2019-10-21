let p = new Promise((resolve, reject) => {  
  console.log('first');
  resolve();
});
p.then(() => console.log('second'))
 .then(() => console.log('third'))
 .then(() => console.log('fourth'));

// first
// second
// third
// fourth
PromiseChainingExample01.js
