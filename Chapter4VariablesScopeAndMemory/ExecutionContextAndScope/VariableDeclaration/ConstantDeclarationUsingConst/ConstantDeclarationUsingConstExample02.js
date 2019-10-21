if (true) {
  const a = 0;
}
console.log(a);  // ReferenceError: a is not defined

while (true) {
  const b = 1;
}
console.log(b);  // ReferenceError: b is not defined

function foo() {
  const c = 2;
}
console.log(c);  // ReferenceError: c is not defined

{
  const d = 3;
}
console.log(d);  // ReferenceError: d is not defined
