const s = new Set();

const objVal = {},
      arrVal = [];

s.add(objVal);
 .add(arrVal);

objVal.bar = "bar";
arrVal.push("bar");

alert(s.has(objVal));  // true
alert(s.has(arrVal));  // true 
