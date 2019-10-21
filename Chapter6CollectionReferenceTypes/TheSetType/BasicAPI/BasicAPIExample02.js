// Initialize set with array
const s1 = new Set(["val1", "val2", "val3]);
alert(s1.size);  // 3

// Initialize set with custom-defined iterator
const s2 = new Set({
  [Symbol.iterator]: function*() {
    yield "val1";
    yield "val2";
    yield "val3";
  }
}); 
alert(s2.size);  // 3
