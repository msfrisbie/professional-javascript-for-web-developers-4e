// Unicode "Latin small letter A" is U+0061
// Unicode "Latin small letter B" is U+0062
// Unicode "Latin small letter C" is U+0063
// Unicode "Latin small letter D" is U+0064
// Unicode "Latin small letter E" is U+0065

console.log(String.fromCharCode(0x61, 0x62, 0x63, 0x64, 0x65));  // "abcde"

// 0x0061 === 97
// 0x0062 === 98
// 0x0063 === 99
// 0x0064 === 100
// 0x0065 === 101

console.log(String.fromCharCode(97, 98, 99, 100, 101));          // "abcde"
