function* generatorFn() {}

let generatorObject = generatorFn();

console.log(generatorObject);         // generatorFn {<suspended>}
console.log(generatorObject.next());  // { done: true, value: undefined } 
GeneratorBasicsExample02.js
