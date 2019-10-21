const s = new Set();

alert(s.has("Matt"));     // false
alert(s.size);            // 0

s.add("Matt")
 .add("Frisbie");

alert(s.has("Matt"));     // true
alert(s.size);            // 2

s.delete("Matt");

alert(s.has("Matt"));     // false 
alert(s.has("Frisbie"));  // true 
alert(s.size);            // 1

s.clear();  // destroys all values in this Set instance 

alert(s.has("Matt"));     // false 
alert(s.has("Frisbie"));  // false 
alert(s.size);            // 0

