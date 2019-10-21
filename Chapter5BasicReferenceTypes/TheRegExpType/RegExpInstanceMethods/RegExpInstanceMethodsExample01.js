let text = "mom and dad and baby";
let pattern = /mom( and dad( and baby)?)?/gi;
         
let matches = pattern.exec(text);
console.log(matches.index);  // 0
console.log(matches.input);  // "mom and dad and baby"
console.log(matches[0]);     // "mom and dad and baby"
console.log(matches[1]);     // " and dad and baby"
console.log(matches[2]);     // " and baby"
