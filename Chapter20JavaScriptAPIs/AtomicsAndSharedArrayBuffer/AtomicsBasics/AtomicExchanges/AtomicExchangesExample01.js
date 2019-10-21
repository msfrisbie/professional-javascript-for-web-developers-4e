const sharedArrayBuffer = new SharedArrayBuffer(4);
const view = new Uint32Array(sharedArrayBuffer);

// Write 3 to 0-index
Atomics.store(view, 0, 3);

// Read value out of 0-index and then write 4 to 0-index
console.log(Atomics.exchange(view, 0, 4));  // 3

// Read value at 0-index
console.log(Atomics.load(view, 0));          // 4
