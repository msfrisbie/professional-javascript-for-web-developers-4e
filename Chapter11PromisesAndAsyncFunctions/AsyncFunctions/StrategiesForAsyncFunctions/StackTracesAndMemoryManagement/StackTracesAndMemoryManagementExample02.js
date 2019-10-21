function fooPromiseExecutor(resolve, reject) {
  setTimeout(reject, 1000, 'bar');
}

async function foo() {
  await new Promise(fooPromiseExecutor);
}
foo();

// Uncaught (in promise) bar
//   foo
//   async function (async)
//   foo
StackTraceExample02.js
