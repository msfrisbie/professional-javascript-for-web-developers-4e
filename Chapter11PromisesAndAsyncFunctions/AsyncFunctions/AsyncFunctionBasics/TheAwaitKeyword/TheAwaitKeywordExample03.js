// Asynchronously print "foo"
async function foo() {
  console.log(await Promise.resolve('foo'));
}
foo();
// foo


// Asynchronously print "bar"
async function bar() {
  return await Promise.resolve('bar');
}
bar().then(console.log);
// bar

// Asynchronously print "baz" after 1000ms
async function baz() {
  await new Promise((resolve, reject) => setTimeout(resolve, 1000));
  console.log('baz');
}
baz();
// baz <after 1000ms>
AwaitExample01.js
