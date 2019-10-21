const textEncoder = new TextEncoder();
const decodedText = 'foo';
const encodedText = textEncoder.encode(decodedText);

// f encoded in utf-8 is 0x66 (102 in decimal)
// o encoded in utf-8 is 0x6F (111 in decimal)
console.log(encodedText);  // Uint8Array(3) [102, 111, 111]
