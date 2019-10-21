const m = new Map();

alert(m.has("firstName"));   // false
alert(m.get("firstName "));  // undefined
alert(m.size);               // 0

m.set("firstName", "Matt")
 .set("lastName", "Frisbie");

alert(m.has("firstName"));  // true
alert(m.get("firstName"));  // Matt
alert(m.size);              // 2

m.delete("firstName");  // deletes only this key/value pair

alert(m.has("firstName"));  // false 
alert(m.has("lastName"));   // true 
alert(m.size);              // 1

m.clear();  // destroys all key/value pairs in this Map instance 

alert(m.has("firstName"));  // false 
alert(m.has("lastName"));   // false 
alert(m.size);              // 0

