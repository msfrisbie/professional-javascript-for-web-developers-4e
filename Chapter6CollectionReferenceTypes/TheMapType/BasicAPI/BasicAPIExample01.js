const m = new Map();
If you wish to populate the Map when it is initialized, the constructor optionally accepts an iterable object, expecting it to contain key/value pair arrays. Each pair in the iterable argument will be inserted into the newly created Map in the order in which they are iterated:
// Initialize map with nested arrays
const m1 = new Map([
  ["key1", "val1"],
  ["key2", "val2"],
  ["key3", "val3"]
]);
alert(m1.size);  // 3

// Initialize map with custom-defined iterator
const m2 = new Map({
  [Symbol.iterator]: function*() {
    yield ["key1", "val1"];
    yield ["key2", "val2"];
    yield ["key3", "val3"];
  }
}); 
alert(m2.size);  // 3

// Map expects values to be key/value whether they are provided or not
const m3 = new Map([[]]);
alert(m3.has(undefined));  // true
alert(m3.get(undefined));  // undefined
