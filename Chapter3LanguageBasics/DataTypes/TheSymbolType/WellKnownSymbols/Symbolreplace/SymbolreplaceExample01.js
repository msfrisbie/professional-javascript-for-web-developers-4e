console.log(RegExp.prototype[Symbol.replace]);  
// ƒ [Symbol.replace]() { [native code] }

console.log('foobarbaz'.replace(/bar/, 'qux'));  
// 'fooquxbaz'
