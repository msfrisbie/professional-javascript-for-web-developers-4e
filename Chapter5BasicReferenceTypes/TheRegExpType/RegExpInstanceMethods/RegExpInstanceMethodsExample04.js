let text = "cat, bat, sat, fat";    
let pattern = /.at/y;
         
let matches = pattern.exec(text);    
console.log(matches.index);       // 0
console.log(matches[0]);          // cat
console.log(pattern.lastIndex);   // 3
         
// There is no match starting at character index 3, so exec() will return null
// exec() finding no matches resets lastIndex to 0
matches = pattern.exec(text);    
console.log(matches);             // null
console.log(pattern.lastIndex);   // 0

// Advancing lastIndex will allow a sticky regex exec() to find the next match:
pattern.lastIndex = 5; 
matches = pattern.exec(text);    
console.log(matches.index);       // 5
console.log(matches[0]);          // bat
console.log(pattern.lastIndex);   // 8
