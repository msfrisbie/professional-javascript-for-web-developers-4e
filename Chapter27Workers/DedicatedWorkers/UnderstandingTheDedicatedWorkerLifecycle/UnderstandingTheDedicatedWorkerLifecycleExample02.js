self.postMessage('foo');
self.close();
self.postMessage('bar');
setTimeout(() => self.postMessage('baz'), 0);

main.js
const worker = new Worker('./worker.js');
worker.onmessage = ({data}) => console.log(data);

// foo
// bar
