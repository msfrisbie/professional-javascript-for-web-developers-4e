self.addEventListener('message', ({data}) => console.log(data));

main.js
const worker = new Worker('./initializingWorker.js');

// Worker may still be initializing, 
// yet postMessage data is handled correctly.
worker.postMessage('foo');
worker.postMessage('bar');
worker.postMessage('baz');

// foo
// bar
// baz
