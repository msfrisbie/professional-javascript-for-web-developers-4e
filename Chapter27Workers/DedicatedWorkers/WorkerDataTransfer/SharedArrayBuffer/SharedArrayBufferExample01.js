const worker = new Worker('./worker.js');

// Create 1 byte buffer
const sharedArrayBuffer = new SharedArrayBuffer(1);

// Create view onto 1 byte buffer
const view = new Uint8Array(sharedArrayBuffer);

// Parent context assigns value of 1
view[0] = 1;

worker.onmessage = () => {
  console.log(`buffer value after worker modification: ${view[0]}`);
};

// Send reference to sharedArrayBuffer
worker.postMessage(sharedArrayBuffer);


// buffer value before worker modification: 1
// buffer value after worker modification: 2
worker.js
self.onmessage = ({data}) => {
  const view = new Uint8Array(data);

  console.log(`buffer value before worker modification: ${view[0]}`);

  // Worker assigns new value to shared buffer
  view[0] += 1;

  // Send back empty postMessage to signal assignment is complete
  self.postMessage(null);
};
