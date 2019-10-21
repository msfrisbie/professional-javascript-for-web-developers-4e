function addTwo(x) {return x + 2;}
function addThree(x) {return x + 3;}
function addFive(x) {return x + 5;}

function addTen(x) {
  return [addTwo, addThree, addFive]
      .reduce((promise, fn) => promise.then(fn), Promise.resolve(x));
}

addTen(8).then(console.log);  // 18
SerialPromiseCompositionExample02.js
