const options = [1,,,,5];

for (const option of options) {
  alert(option === undefined);
}
// false
// true
// true
// true
// false

const a = Array.from([,,,]);  // Array of 3 holes created with ES6's Array.from()
for (const val of a) {
  alert(val === undefined);
}
// true
// true
// true

alert(Array.of(...[,,,]));  // [undefined, undefined, undefined]

for (const [index, value] of options.entries()) {
  alert(value);
}
// 1
// undefined
// undefined
// undefined
// 5 
