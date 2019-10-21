const sharedArrayBuffer = new SharedArrayBuffer(4);
const view = new Uint32Array(sharedArrayBuffer);

// Write 5 to 0-index
Atomics.store(view, 0, 5);
// Read the value out of the buffer
let initial = Atomics.load(view, 0);

// Perform a non-atomic operation on that value
let result = initial ** 2;

// Write that value back into the buffer only if the buffer has not changed
Atomics.compareExchange(view, 0, initial, result);

// Check that the write succeeded
console.log(Atomics.load(view, 0));  // 25
