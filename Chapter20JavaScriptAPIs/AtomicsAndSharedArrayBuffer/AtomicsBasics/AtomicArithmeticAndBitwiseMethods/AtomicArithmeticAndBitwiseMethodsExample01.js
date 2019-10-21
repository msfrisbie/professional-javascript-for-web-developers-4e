// Create buffer of size 1
let sharedArrayBuffer = new SharedArrayBuffer(1);

// Create Uint8Array from buffer
let typedArray = new Uint8Array(sharedArrayBuffer);

// All ArrayBuffers are initialized to 0
console.log(typedArray);  // Uint8Array[0]

const index = 0;
const increment = 5;

// Atomic add 5 to value at index 0
Atomics.add(typedArray, index, increment);

console.log(typedArray);  // Uint8Array[5]

// Atomic subtract 5 to value at index 0
Atomics.sub(typedArray, index, increment);

console.log(typedArray);  // Uint8Array[0]
