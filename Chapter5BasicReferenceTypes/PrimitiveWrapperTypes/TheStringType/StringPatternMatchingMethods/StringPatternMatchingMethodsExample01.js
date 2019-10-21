let text = "cat, bat, sat, fat";    
let pattern = /.at/;
         
// same as pattern.exec(text)
let matches = text.match(pattern);
console.log(matches.index);      // 0
console.log(matches[0]);         // "cat"
console.log(pattern.lastIndex);  // 0
