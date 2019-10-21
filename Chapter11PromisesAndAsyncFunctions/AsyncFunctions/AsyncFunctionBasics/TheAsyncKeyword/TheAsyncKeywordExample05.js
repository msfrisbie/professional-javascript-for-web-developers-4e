// Return a primitive
async function foo() {
  return 'foo';
}
foo().then(console.log);
// foo

// Return a non-thenable object
async function bar() {
  return ['bar'];
}
bar().then(console.log);
// ['bar']

// Return a thenable non-promise object
async function baz() {
  const thenable = {
    then(callback) { callback('baz'); }
  };
  return thenable;
}
baz().then(console.log);
// baz

// Return a promise
async function qux() {
  return Promise.resolve('qux');
}
qux().then(console.log);
// qux
AsyncExample01.js
