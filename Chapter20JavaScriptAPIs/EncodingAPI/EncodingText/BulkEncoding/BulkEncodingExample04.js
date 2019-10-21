const textEncoder = new TextEncoder();
const fooArr = new Uint8Array(3); 
const barArr = new Uint8Array(2);
const fooResult = textEncoder.encodeInto('foo', fooArr); 
const barResult = textEncoder.encodeInto('bar', barArr);

console.log(fooArr);     // Uint8Array(3) [102, 111, 111] 
console.log(fooResult);  // { read: 3, written: 3 }

console.log(barArr);     // Uint8Array(2) [98, 97] 
console.log(barResult);  // { read: 2, written: 2 }
