let text = "cat, bat, sat, fat";    
let result = text.replace("at", "ond");
console.log(result);  // "cond, bat, sat, fat"
         
result = text.replace(/at/g, "ond");
console.log(result);  // "cond, bond, sond, fond"
