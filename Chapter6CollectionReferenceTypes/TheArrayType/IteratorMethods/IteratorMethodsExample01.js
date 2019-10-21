const a = ["foo", "bar", "baz", "qux"];

// Because these methods return iterators, you can funnel their contents
// into array instances using Array.from()
const aKeys = Array.from(a.keys());
const aValues = Array.from(a.values());
const aEntries = Array.from(a.entries());

alert(aKeys);     // [0, 1, 2, 3]
alert(aValues);   // ["foo", "bar", "baz", "qux"]
alert(aEntries);  // [[0, "foo"], [1, "bar"], [2, "baz"], [3, "qux"]] 
