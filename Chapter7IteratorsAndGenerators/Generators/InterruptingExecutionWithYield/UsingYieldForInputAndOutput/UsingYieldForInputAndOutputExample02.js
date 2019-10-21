function* generatorFn() {
  return yield 'foo';
}

let generatorObject = generatorFn();

console.log(generatorObject.next());       // { done: false, value: 'foo' }
console.log(generatorObject.next('bar'));  // { done: true, value: 'bar' } 
YieldInputOutputExample02.js
