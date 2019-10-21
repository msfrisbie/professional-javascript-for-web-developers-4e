self.onmessage = ({data}) => console.log(data);

main.js
const worker = new Worker('./worker.js');

// Allow 1000ms for worker to initialize
setTimeout(() => {
  worker.postMessage('foo');
  worker.terminate();
  worker.postMessage('bar');
  setTimeout(() => worker.postMessage('baz'), 0);
}, 1000);

// foo
