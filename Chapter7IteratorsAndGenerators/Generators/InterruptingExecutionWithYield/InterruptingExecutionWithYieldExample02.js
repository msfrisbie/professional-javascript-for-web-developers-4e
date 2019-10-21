function* generatorFn() {
  yield 'foo';
  yield 'bar';
  return 'baz';
}

let generatorObject = generatorFn();

console.log(generatorObject.next());  // { done: false, value: 'foo' } 
console.log(generatorObject.next());  // { done: false, value: 'bar' } 
console.log(generatorObject.next());  // { done: true, value: 'baz' } 
GeneratorYieldExample02.js
