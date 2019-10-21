let o = new 10;                            // throws TypeError
console.log("name" in true);                     // throws TypeError
Function.prototype.toString.call("name");  // throws TypeError 
