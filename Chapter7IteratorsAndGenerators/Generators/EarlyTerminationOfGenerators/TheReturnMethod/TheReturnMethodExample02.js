function* generatorFn() {
  for (const x of [1, 2, 3]) {
    yield x;
  }
}

const g = generatorFn();

console.log(g.next());     // { done: false, value: 1 }
console.log(g.return(4));  // { done: true, value: 4 }
console.log(g.next());     // { done: true, value: undefined }
console.log(g.next());     // { done: true, value: undefined }
console.log(g.next());     // { done: true, value: undefined } 
GeneratorReturnExample02.js
