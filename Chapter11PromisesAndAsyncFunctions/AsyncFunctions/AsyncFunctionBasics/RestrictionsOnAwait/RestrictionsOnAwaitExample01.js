async function foo() {
  console.log(await Promise.resolve(3));
}
foo();
// 3

// Immediately invoked async function expression
(async function() {
  console.log(await Promise.resolve(3));
})();
// 3 
AwaitRestrictionExample01.js
