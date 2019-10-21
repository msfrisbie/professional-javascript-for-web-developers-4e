function foo() {}
let bar = function() {};
let baz = () => {};

console.log(foo.name);               // foo
console.log(bar.name);               // bar
console.log(baz.name);               // baz 
console.log((() => {}).name);        // (empty string)
console.log((new Function()).name);  // anonymous
