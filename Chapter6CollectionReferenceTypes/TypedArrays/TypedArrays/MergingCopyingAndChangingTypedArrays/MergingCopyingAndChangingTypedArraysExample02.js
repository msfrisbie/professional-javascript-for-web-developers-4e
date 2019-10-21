const source = Int16Array.of(2, 4, 6, 8);

// Copies the entire array into a new array of the same type
const fullCopy = source.subarray();
alert(fullCopy);  // [2, 4, 6, 8]

// Copy the array from index 2 on
const halfCopy = source.subarray(2);
alert(halfCopy);  // [6, 8]

// Copy the array from index 1 up until 3
const partialCopy = source.subarray(1, 3);
alert(partialCopy);  // [4, 6] 
