const buf = new ArrayBuffer(16);

// DataView default to use the entire ArrayBuffer
const fullDataView = new DataView(buf);
alert(fullDataView.byteOffset);      // 0
alert(fullDataView.byteLength);      // 16
alert(fullDataView.buffer === buf);  // true

// Constructor takes an optional byte offset and byte length
//   byteOffset=0 begins the view at the start of the buffer
//   byteLength=8 restricts the view to the first 8 bytes
const firstHalfDataView = new DataView(buf, 0, 8);
alert(firstHalfDataView.byteOffset);      // 0
alert(firstHalfDataView.byteLength);      // 8
alert(firstHalfDataView.buffer === buf);  // true

// DataView will use the remainder of the buffer unless specified 
//   byteOffset=8 begins the view at the 9th byte of the buffer
//   byteLength default is the remainder of the buffer
const secondHalfDataView = new DataView(buf, 8);
alert(secondHalfDataView.byteOffset);      // 8
alert(secondHalfDataView.byteLength);      // 8
alert(secondHalfDataView.buffer === buf);  // true 
