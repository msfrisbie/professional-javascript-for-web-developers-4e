// Store messagePort globally inside listener
let messagePort = null;

function factorial(n) {
  let result = 1;
  while(n) { result *= n--; }
  return result;
}

// Set message handler on global object
self.onmessage = ({ports}) => {
  // Only set the port a single time
  if (!messagePort) {
    // Initial message sends the port, 
    // assign to variable and unset listener
    messagePort = ports[0];
    self.onmessage = null;

    // Set message handler on global object
    messagePort.onmessage = ({data}) => {
      // Subsequent messages send data
      messagePort.postMessage(`${data}! = ${factorial(data)}`);
    };
  }
};

main.js
const channel = new MessageChannel();
const factorialWorker = new Worker('./worker.js');

// Send the MessagePort object to the worker.
// Worker is responsible for handling this correctly
factorialWorker.postMessage(null, [channel.port1]);

// Send the actual message on the channel
channel.port2.onmessage = ({data}) => console.log(data);

// Worker will respond on the channel
channel.port2.postMessage(5);

// // 5! = 120
