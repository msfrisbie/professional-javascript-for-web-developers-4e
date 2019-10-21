function* generatorFn() {
  return 'foo';
}

let generatorObject = generatorFn();

console.log(generatorObject);         // generatorFn {<suspended>}
console.log(generatorObject.next());  // { done: true, value: 'foo' } 
GeneratorBasicsExample03.js
