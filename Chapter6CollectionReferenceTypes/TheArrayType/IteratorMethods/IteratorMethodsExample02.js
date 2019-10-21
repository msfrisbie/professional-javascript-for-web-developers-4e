const a = ["foo", "bar", "baz", "qux"];

for (const [idx, element] of a.entries()) [
  alert(idx);
  alert(element);
}
// 0
// foo
// 1
// bar
// 2
// baz
// 3
// qux 
