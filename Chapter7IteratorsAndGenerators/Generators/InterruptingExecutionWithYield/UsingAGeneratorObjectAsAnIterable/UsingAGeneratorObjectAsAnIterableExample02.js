function* nTimes(n) {
  while(n--) {
    yield;
  }
}

for (let _ of nTimes(3)) {
  console.log('foo');
}
// foo
// foo
// foo 
IterableGeneratorExample02.js
