// Creates a buffer of 12 bytes
const buf = new ArrayBuffer(12);
// Creates an Int32Array that references this buffer
const ints = new Int32Array(buf);
// The typed array recognizes it needs 4 bytes per element,
// and therefore will have a length of 3
alert(ints.length);  // 3

// Creates an Int32Array of length 6
const ints2 = new Int32Array(6);
// Each number uses 4 bytes, so the ArrayBuffer is 24 bytes
alert(ints2.length);             // 6
// Like DataView, typed arrays have a reference to their associated buffer
alert(ints2.buffer.byteLength);  // 24

// Creates an Int32Array containing [2, 4, 6, 8]
const ints3 = new Int32Array([2, 4, 6, 8]); 
alert(ints3.length);             // 4
alert(ints3.buffer.byteLength);  // 16
alert(ints3[2]);                 // 6

// Creates an Int16Array with values copies from ints3
const ints4 = new Int16Array(ints3);
// The new typed array allocates its own buffer, and each value
// is converted to its new representation at the same index 
alert(ints4.length);             // 4
alert(ints4.buffer.byteLength);  // 8
alert(ints4[2]);                 // 6 

// Creates an Int16Array from a normal array
const ints5 = Int16Array.from([3, 5, 7, 9]); 
alert(ints5.length);             // 4
alert(ints5.buffer.byteLength);  // 8
alert(ints5[2]);                 // 7 

// Creates a Float32Array from arguments
const floats = Float32Array.of(3.14, 2.718, 1.618); 
alert(floats.length);             // 3
alert(floats.buffer.byteLength);  // 12
alert(floats[2]);                 // 1.6180000305175781
