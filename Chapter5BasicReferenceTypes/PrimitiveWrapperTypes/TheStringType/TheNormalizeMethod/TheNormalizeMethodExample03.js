let a1 = String.fromCharCode(0x00C5),
    a2 = String.fromCharCode(0x212B),
    a3 = String.fromCharCode(0x0041, 0x030A);

// U+00C5 is the NFC/NFKC normalized form of 0+212B
console.log(a1 === a1.normalize("NFD"));   // false
console.log(a1 === a1.normalize("NFC"));   // true
console.log(a1 === a1.normalize("NFKD"));  // false
console.log(a1 === a1.normalize("NFKC"));  // true

// U+212B is non-normalized
console.log(a2 === a2.normalize("NFD"));   // false
console.log(a2 === a2.normalize("NFC"));   // false
console.log(a2 === a2.normalize("NFKD"));  // false
console.log(a2 === a2.normalize("NFKC"));  // false

// U+0041/U+030A is the NFD/NFKD normalized form of 0+212B
console.log(a3 === a3.normalize("NFD"));   // true
console.log(a3 === a3.normalize("NFC"));   // false
console.log(a3 === a3.normalize("NFKD"));  // true
console.log(a3 === a3.normalize("NFKC"));  // false
