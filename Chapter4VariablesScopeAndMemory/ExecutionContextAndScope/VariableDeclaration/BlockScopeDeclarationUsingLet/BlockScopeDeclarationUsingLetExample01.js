if (true) {
  let a;
}
console.log(a);  // ReferenceError: a is not defined

while (true) {
  let b;
}
console.log(b);  // ReferenceError: b is not defined

function foo() {
  let c;
}
console.log(c);  // ReferenceError: c is not defined
                 // This should be unsurprising, as 
                 // a var declaration would also throw an Error

// This is not an object literal, this is a standalone block.
// The JavaScript interpreter will identify it as such based on its contents.
{
  let d;
}
console.log(d);  // ReferenceError: d is not defined
