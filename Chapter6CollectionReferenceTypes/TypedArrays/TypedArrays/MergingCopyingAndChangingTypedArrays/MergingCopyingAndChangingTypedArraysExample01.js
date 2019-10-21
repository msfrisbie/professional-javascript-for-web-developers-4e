// Create an int16 array of length 8
const container = new Int16Array(8);

// Copy in typed array into first four values
// Offset default to an index of 0
container.set(Int8Array.of(1, 2, 3, 4));
alert(container);  // [1,2,3,4,0,0,0,0]
// Copy in normal array into last four values
// Offset of 4 means begin inserting at the index 4
container.set([5,6,7,8], 4);
alert(container);  // [1,2,3,4,5,6,7,8]

// An overflow will throw an error
container.set([5,6,7,8], 7);
// RangeError 
