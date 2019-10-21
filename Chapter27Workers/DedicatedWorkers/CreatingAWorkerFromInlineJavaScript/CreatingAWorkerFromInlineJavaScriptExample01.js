// Create string of JavaScript code to execute
const workerScript = `
  self.onmessage = ({data}) => console.log(data); 
`;

// Generate a blob instance from the script string
const workerScriptBlob = new Blob([workerScript]);

// Create an object URL for the blob instance
const workerScriptBlobUrl = URL.createObjectURL(workerScriptBlob);

// Create a dedicated worker from the blob
const worker = new Worker(workerScriptBlobUrl);

worker.postMessage('blob worker script');
// blob worker script
