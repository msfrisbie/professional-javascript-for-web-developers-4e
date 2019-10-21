const textDecoder = new TextDecoder();

// f encoded in utf-8 is 0x66 (102 in decimal)
// o encoded in utf-8 is 0x6F (111 in decimal)
const encodedText = Uint32Array.of(102, 111, 111);
const decodedText = textDecoder.decode(encodedText);

console.log(decodedText);  // "f   o   o   "
