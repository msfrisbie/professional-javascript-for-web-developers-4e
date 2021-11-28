console.log(RegExp.prototype[Symbol.split]);  
// ƒ [Symbol.split]() { [native code] }

// Passing arguments as a regex argument
console.log('foobarbaz'.split(/bar/)); // ['foo', 'baz']

// Passing arguments other than a regular expression
console.log('foobarbaz'.split(new Array(1,2,3))); // ["foobarbaz"];
