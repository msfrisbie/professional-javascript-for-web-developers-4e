const s = new Set(["val1", "val2", "val3"]);

alert(s.values === s[Symbol.iterator]);  // true
alert(s.keys === s[Symbol.iterator]);    // true

for (let value of s.values()) {
  alert(value);
}
// val1
// val2
// val3

for (let value of s[Symbol.iterator]()) {
  alert(value);
}
// val1
// val2
// val3 
