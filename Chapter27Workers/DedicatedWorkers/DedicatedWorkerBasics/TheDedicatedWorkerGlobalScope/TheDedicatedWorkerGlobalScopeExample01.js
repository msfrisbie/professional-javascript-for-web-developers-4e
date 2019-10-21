console.log('inside worker:', self);

main.js
const worker = new Worker('./globalScopeWorker.js');

console.log('created worker:', worker);

// created worker: Worker {}
// inside worker: DedicatedWorkerGlobalScope {}
