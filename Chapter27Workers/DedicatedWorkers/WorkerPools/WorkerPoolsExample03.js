self.onmessage = ({data}) => {
  let sum = 0;
  let view = new Float32Array(data.arrayBuffer)
  
  // Perform sum
  for (let i = data.startIdx; i < data.endIdx; ++i) {
    // No need for Atomics since only performing reads
    sum += view[i];
  }

  // Send the result to the worker
  self.postMessage(sum);
};

// Send messagemessate to TaskWorker to signal worker is
// ready to receive tasks.
self.postMessage('ready');
