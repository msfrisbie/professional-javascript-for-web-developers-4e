let p1 = new Promise((resolve, reject) => reject(Error('foo')));
let p2 = new Promise((resolve, reject) => { throw Error('foo'); });
let p3 = Promise.resolve().then(() => { throw Error('foo'); });
let p4 = Promise.reject(Error('foo'));

setTimeout(console.log, 0, p1);  // Promise <rejected>: Error: foo
setTimeout(console.log, 0, p2);  // Promise <rejected>: Error: foo 
setTimeout(console.log, 0, p3);  // Promise <rejected>: Error: foo 
setTimeout(console.log, 0, p4);  // Promise <rejected>: Error: foo


// Also throws four uncaught errors
ErrorHandlingExample01.js
Promises can be rejected with any value including undefined, but it is strongly recommended that you consistently use error object. The primary reason for this is that constructing an error object allows the browser to capture the stack trace inside the error object, which is immensely useful in debugging. For example, the stack trace for the three errors in the preceding code should appear something like the following:
Uncaught (in promise) Error: foo
    at Promise (test.html:5)
    at new Promise (<anonymous>)
    at test.html:5
Uncaught (in promise) Error: foo
    at Promise (test.html:6)
    at new Promise (<anonymous>)
    at test.html:6
Uncaught (in promise) Error: foo
    at test.html:8
Uncaught (in promise) Error: foo
    at Promise.resolve.then (test.html:7)
