const m = new Map([
  ["key1", "val1"],
  ["key2", "val2"],
  ["key3", "val3"]
]);

alert([...m]); // [[key1,val1],[key2,val2],[key3,val3]]
