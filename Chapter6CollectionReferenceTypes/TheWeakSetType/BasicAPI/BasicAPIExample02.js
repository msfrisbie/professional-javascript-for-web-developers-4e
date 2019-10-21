const val1 = {id: 1},
      val2 = {id: 2},
      val3 = {id: 3};
// Initialize WeakSet with nested arrays
const ws1 = new WeakSet([val1, val2, val3]);

alert(ws1.has(val1));  // true
alert(ws1.has(val2));  // true
alert(ws1.has(val3));  // true

// Initialization is all-or-nothing, a single bad value will
// throw an error and abort the initialization
const ws2 = new WeakSet([val1, "BADVAL", val3]);
// TypeError: Invalid value used in WeakSet
typeof ws2;
// ReferenceError: ws2 is not defined

// Primitives can still be used with an object wrapper
const stringVal = new String("val1");
const ws3 = new WeakSet([stringVal]);
alert(ws3.has(stringVal));  // true
