function* generatorFn() {
  for (const x of [1, 2, 3]) {
    yield x;
  }
}

const g = generatorFn();

console.log(g);    // generatorFn {<suspended>}
try {
  g.throw('foo');
} catch (e) {
  console.log(e);  // foo
}
console.log(g);    // generatorFn {<closed>} 
GeneratorThrowExample01.js
