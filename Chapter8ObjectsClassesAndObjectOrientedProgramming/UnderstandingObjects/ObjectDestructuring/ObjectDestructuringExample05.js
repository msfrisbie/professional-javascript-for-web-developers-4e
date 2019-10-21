let { length } = 'foobar';
console.log(length);        // 6

let { constructor: c } = 4;
console.log(c === Number);  // true

let { _ } = null;           // TypeError

let { _ } = undefined;      // TypeError 
