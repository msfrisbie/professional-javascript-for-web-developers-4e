let pattern1 = /\[bc\]at/i;
         
console.log(pattern1.global);     // false
console.log(pattern1.ignoreCase); // true
console.log(pattern1.multiline);  // false
console.log(pattern1.lastIndex);  // 0
console.log(pattern1.source);     // "\[bc\]at"
console.log(pattern1.flags);      // "i"
         
let pattern2 = new RegExp("\\[bc\\]at", "i");
         
console.log(pattern2.global);     // false
console.log(pattern2.ignoreCase); // true
console.log(pattern2.multiline);  // false
console.log(pattern2.lastIndex);  // 0
console.log(pattern2.source);     // "\[bc\]at"
console.log(pattern2.flags);      // "i"
