const s = new Set(["val1", "val2", "val3"]);

for (let pair of s.entries()) {
  alert(pair);
}
// [val1,val1]
// [val2,val2]
// [val3,val3] 
