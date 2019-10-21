// Unicode demo
// \u00A9 is the copyright symbol
console.log(`\u00A9`);            // ©
console.log(String.raw`\u00A9`);  // \u00A9

// Newline demo
console.log(`first line\nsecond line`);            
// first line
// second line

console.log(String.raw`first line\nsecond line`);  // "first line\nsecond line"

// This does not work for actual newline characters: they do not
// undergo conversion from their plaintext escaped equivalents
console.log(`first line
second line`);                
// first line
// second line

console.log(String.raw`first line
second line`);                
// first line
// second line
