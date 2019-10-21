const worker = new Worker('./js/worker.js');

// worker
// subworker

js/worker.js
console.log('worker');

const worker = new Worker('./subworker.js');

js/subworker.js
console.log('subworker'); 
