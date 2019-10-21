const s = new Set();

const functionVal = function() {};
const symbolVal = Symbol();
const objectVal = new Object();

s.add(functionVal);
s.add(symbolVal);
s.add(objectVal);

alert(s.has(functionVal));    // true
alert(s.has(symbolVal));      // true
alert(s.has(objectVal));      // true

// SameValueZero checks mean separate instances will not collide
alert(s.has(function() {}));  // false
