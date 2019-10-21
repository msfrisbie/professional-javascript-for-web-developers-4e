let text = "cat, bat, sat, fat";    
let pattern = /.at/g;
         
let matches = pattern.exec(text);    
console.log(matches.index);       // 0
console.log(matches[0]);          // cat
console.log(pattern.lastIndex);   // 3
         
matches = pattern.exec(text);    
console.log(matches.index);       // 5
console.log(matches[0]);          // bat
console.log(pattern.lastIndex);   // 8
         
matches = pattern.exec(text);    
console.log(matches.index);       // 10
console.log(matches[0]);          // sat
console.log(pattern.lastIndex);   // 13
