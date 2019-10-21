const fooArray = new Uint8Array(2 ** 16);
console.log(window.crypto.getRandomValues(fooArray));  // Uint32Array(16384) [...]

const barArray = new Uint8Array((2 ** 16) + 1);
console.log(window.crypto.getRandomValues(barArray));  // Error
