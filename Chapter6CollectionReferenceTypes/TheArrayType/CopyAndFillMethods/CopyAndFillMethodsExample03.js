let ints,
    reset = () => ints = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
reset();

// Copy the contents of ints beginning at index 0 to the values beginning at index 5.
// Stops when it reaches the end of the array either in the source
// indices or the destination indices.
ints.copyWithin(5);
alert(ints);  // [0, 1, 2, 3, 4, 0, 1, 2, 3, 4]
reset();

// Copy the contents of ints beginning at index 5 to the values beginning at index 0.
ints.copyWithin(0, 5);
alert(ints);  // [5, 6, 7, 8, 9, 5, 6, 7, 8, 9]
reset();

// Copy the contents of ints beginning at index 0 and ending at index 3 to values
// beginning at index 4.
ints.copyWithin(4, 0, 3);
alert(ints);  // [0, 1, 2, 3, 0, 1, 2, 7, 8, 9]
reset();

// The JS engine will perform a full copy of the range of values before inserting,
// so there is no danger of overwrite during the copy.
ints.copyWithin(2, 0, 6);
alert(ints);  // [0, 1, 0, 1, 2, 3, 4, 5, 8, 9]  
reset();

// Support for negative indexing behaves identically to fill() in that negative 
// indices are calculated relative to the end of the array
ints.copyWithin(-4, -7, -3);
alert(ints);  // [0, 1, 2, 3, 4, 5, 3, 4, 5, 6] 
