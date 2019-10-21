console.log(RegExp.prototype[Symbol.match]);  
// ƒ [Symbol.match]() { [native code] }

console.log('foobar'.match(/bar/));  
//  ["bar", index: 3, input: "foobar", groups: undefined]
