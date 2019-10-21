// Attempt to build worker from script at https://example.com/worker.js
const sameOriginWorker = new Worker('./worker.js');

// Attempt to build worker from script at https://untrusted.com/worker.js
const remoteOriginWorker = new Worker('https://untrusted.com/worker.js');

// Error: Uncaught DOMException: Failed to construct 'Worker':
// Script at https://untrusted.com/main.js cannot be accessed 
// from origin https://example.com
