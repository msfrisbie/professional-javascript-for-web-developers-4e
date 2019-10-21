console.log(RegExp.prototype[Symbol.split]);  
// ƒ [Symbol.split]() { [native code] }

console.log('foobarbaz'.split(/bar/));  
// ['foo', 'baz']
