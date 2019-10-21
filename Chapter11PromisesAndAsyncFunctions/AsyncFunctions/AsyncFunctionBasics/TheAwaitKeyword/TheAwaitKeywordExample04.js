// Await a primitive
async function foo() {
  console.log(await 'foo');
}
foo();
// foo

// Await a non-thenable object
async function bar() {
  console.log(await ['bar']);
}
bar();
// ['bar']

// Await a thenable non-promise object
async function baz() {
  const thenable = {
    then(callback) { callback('baz'); }
  };
  console.log(await thenable);
}
baz();
// baz

// Await a promise
async function qux() {
  console.log(await Promise.resolve('qux'));
}
qux();
// qux
AwaitExample02.js
