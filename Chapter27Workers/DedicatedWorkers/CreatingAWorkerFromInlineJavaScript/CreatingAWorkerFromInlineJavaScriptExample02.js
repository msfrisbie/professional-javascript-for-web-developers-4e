const worker = new Worker(URL.createObjectURL(new Blob([`self.onmessage = ({data}) => console.log(data);`])));

worker.postMessage('blob worker script');
// blob worker script
