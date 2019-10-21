let fooGlobalSymbol = Symbol.for('foo');          // creates new symbol
let otherFooGlobalSymbol = Symbol.for('foo');     // reuses existing symbol

console.log(fooGlobalSymbol === otherFooGlobalSymbol);  // true 
