function delayedResolve(str) {
  return new Promise((resolve, reject) => {
    console.log(str);
    setTimeout(resolve, 1000);
  });
}

delayedResolve('p1 executor')
  .then(() => delayedResolve('p2 executor'))
  .then(() => delayedResolve('p3 executor'))
  .then(() => delayedResolve('p4 executor')) 

// p1 executor (after 1s)
// p2 executor (after 2s)
// p3 executor (after 3s)
// p4 executor (after 4s) 
PromiseChainingExample03.js
