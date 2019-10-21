// Signed ints array of length 2
// Each index holds a 2's complement signed integer which can
// range from -128 (-1 * 2^7) to 127 (2^7 – 1)
const ints = new Int8Array(2);

// Unsigned ints array of length 2
// Each index holds an unsigned integer which can range from
// 0 to 255 (2^7 – 1) 
const unsignedInts = new Uint8Array(2);

// Overflow bits will not spill into adjacent indices.
// The index only takes the least significant 8 bits
unsignedInts[1] = 256;    // 0x100
alert(unsignedInts);      // [0, 0]
unsignedInts[1] = 511;    // 0x1FF
alert(unsignedInts);      // [0, 255]

// Underflow bits will be converted to their unsigned equivalent.
// 0xFF is -1 as a 2's complement int (truncated to 8 bits), 
// but is 255 as an unsigned int
unsignedInts[1] = -1  // 0xFF (truncated to 8 bits)
alert(unsignedInts);  // [0, 255]

// Overflow in 2's complement occurs transparently.
// 0x80 is 128 in unsigned int but -128 in 2's complement int
ints[1] = 128;   // 0x80
alert(ints);     // [0, -128]

// Underflow in 2's complement occurs transparently.
// 0xFF is 255 in unsigned int but -1 in 2's complement int
ints[1] = 255;  // 0xFF
alert(ints);    // [0, -1] 
