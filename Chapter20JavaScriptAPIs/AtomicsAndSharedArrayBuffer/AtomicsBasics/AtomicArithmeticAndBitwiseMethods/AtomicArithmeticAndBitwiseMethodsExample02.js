// Create buffer of size 1
let sharedArrayBuffer = new SharedArrayBuffer(1);

// Create Uint8Array from buffer
let typedArray = new Uint8Array(sharedArrayBuffer);

// All ArrayBuffers are initialized to 0
console.log(typedArray);  // Uint8Array[0]

const index = 0;

// Atomic or 0b1111 to value at index 0
Atomics.or(typedArray, index, 0b1111);

console.log(typedArray);  // Uint8Array[15]

// Atomic and 0b1100 to value at index 0
Atomics.and(typedArray, index, 0b1100);

console.log(typedArray);  // Uint8Array[12]

// Atomic xor 0b1111 to value at index 0
Atomics.xor(typedArray, index, 0b1111);

console.log(typedArray);  // Uint8Array[3]
