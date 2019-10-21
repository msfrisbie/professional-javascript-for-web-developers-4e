const key1 = {id: 1},
      key2 = {id: 2},
      key3 = {id: 3};
// Initialize WeakMap with nested arrays
const wm1 = new WeakMap([
  [key1, "val1"],
  [key2, "val2"],
  [key3, "val3"]
]);
alert(wm.get(key1));  // val2
alert(wm.get(key2));  // val2
alert(wm.get(key3));  // val3

// Initialization is all-or-nothing, a single bad key will
// throw an error and abort the initialization
const wm2 = new WeakMap([
  [key1, "val1"],
  ["BADKEY", "val2"],
  [key3, "val3"]
]);
// TypeError: Invalid value used as WeakMap key
typeof wm2;
// ReferenceError: wm2 is not defined

// Primitives can still be used with an object wrapper
const stringKey = new String("key1");
const wm3 = new WeakMap([
  stringKey, "val1"
]);
alert(wm3.get(stringKey));  // "val1"
