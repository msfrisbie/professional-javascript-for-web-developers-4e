function* generatorFn() {
  yield;
}

let generatorObject = generatorFn();

console.log(generatorObject.next());  // { done: false, value: undefined } 
console.log(generatorObject.next());  // { done: true, value: undefined } 
GeneratorYieldExample01.js
