const buf = new ArrayBuffer(6);
const view = new DataView(buf);

// Attempt to get a value that partially extends past end of buffer
view.getInt32(4);
// RangeError

// Attempt to get a value past the end of the buffer
view.getInt32(8);
// RangeError

// Attempt to get a value past the end of the buffer
view.getInt32(-1);
// RangeError

// Attempt to set a value that extends past end of buffer
view.setInt32(4, 123);
// RangeError 
