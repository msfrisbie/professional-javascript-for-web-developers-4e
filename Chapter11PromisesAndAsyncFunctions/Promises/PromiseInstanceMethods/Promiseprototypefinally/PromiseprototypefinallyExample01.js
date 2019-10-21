let p1 = Promise.resolve();
let p2 = Promise.reject();
let onFinally = function() {
  setTimeout(console.log, 0, 'Finally!')
}

p1.finally(onFinally);  // Finally
p2.finally(onFinally);  // Finally
PromiseFinallyExample01.js 
