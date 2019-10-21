function* generatorFn() {
  yield 'foo';
  yield 'bar';
  return 'baz';
}

let generatorObject1 = generatorFn();
let generatorObject2 = generatorFn();


console.log(generatorObject1.next());  // { done: false, value: 'foo' } 
console.log(generatorObject2.next());  // { done: false, value: 'foo' } 
console.log(generatorObject2.next());  // { done: false, value: 'bar' } 
console.log(generatorObject1.next());  // { done: false, value: 'bar' } 
GeneratorYieldExample03.js
