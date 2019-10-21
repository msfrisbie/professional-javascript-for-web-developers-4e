// empty JS worker file

emptyWorker.js
main.js
console.log(location.href);  // "https://example.com/"
const worker = new Worker(location.href + 'emptyWorker.js');
console.log(worker);         // Worker {}
