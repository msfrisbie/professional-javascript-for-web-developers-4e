let a = 6;
let b = 9;

function zipTag(strings, ...expressions) {
  return strings[0] + expressions.map((e, i) => `${e}${strings[i + 1]}`).join("");
  // return expressions.map((e, i) => `${e}${strings[i + 1]}`).join(""); // same as above
}

let untaggedResult = `${a} + ${b} = ${a + b}`;
let taggedResult = zipTag`${a} + ${b} = ${a + b}`;

console.log(untaggedResult); // "6 + 9 = 15"
console.log(taggedResult); // "6 + 9 = 15"
