function* generatorFn() {
  console.log('foobar');
}

// Nothing is logged yet when the generator function is initially invoked
let generatorObject = generatorFn();

generatorObject.next();  // foobar 
GeneratorBasicsExample04.js
