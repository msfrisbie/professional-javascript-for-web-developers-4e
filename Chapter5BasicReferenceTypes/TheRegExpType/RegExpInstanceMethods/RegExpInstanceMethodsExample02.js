let text = "cat, bat, sat, fat";    
let pattern = /.at/;
         
let matches = pattern.exec(text);    
console.log(matches.index);       // 0
console.log(matches[0]);          // cat
console.log(pattern.lastIndex);   // 0
         
matches = pattern.exec(text);    
console.log(matches.index);       // 0
console.log(matches[0]);          // cat
console.log(pattern.lastIndex);   // 0 
