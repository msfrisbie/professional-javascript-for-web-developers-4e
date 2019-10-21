const channel = new MessageChannel();
const workerA = new Worker('./worker.js');
const workerB = new Worker('./worker.js');

workerA.postMessage('workerA', [channel.port1]);
workerB.postMessage('workerB', [channel.port2]);

workerA.onmessage = ({data}) => console.log(data);
workerB.onmessage = ({data}) => console.log(data);

workerA.postMessage(['page']);

// ['page', 'workerA', 'workerB']

workerB.postMessage(['page'])

// ['page', 'workerB', 'workerA']

worker.js
let messagePort = null;
let contextIdentifier = null;

function addContextAndSend(data, destination) {
  // Add identifier to show when it reached this worker
  data.push(contextIdentifier);

  // Send data to next destination
  destination.postMessage(data);
}

self.onmessage = ({data, ports}) => {
  // If ports exist in the message,
  // set up the worker
  if (ports.length) {
    // Record the identifier
    contextIdentifier = data;

    // Capture the MessagePort
    messagePort = ports[0];

    // Add a handler to send the received data
    // back up to the parent
    messagePort.onmessage = ({data}) => {
      addContextAndSend(data, self);
    }
  } else {
    addContextAndSend(data, messagePort);
  }
};
