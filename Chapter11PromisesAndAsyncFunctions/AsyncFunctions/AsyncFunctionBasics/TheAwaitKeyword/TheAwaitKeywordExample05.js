async function foo() {
  console.log(1);
  await (() => { throw 3; })();
}

// Attach a rejected handler to the returned promise
foo().catch(console.log);
console.log(2);

// 1
// 2
// 3
AwaitExample03.js
