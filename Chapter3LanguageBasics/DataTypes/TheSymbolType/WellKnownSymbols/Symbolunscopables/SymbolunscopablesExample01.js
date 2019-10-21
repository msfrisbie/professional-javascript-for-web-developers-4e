let o = { foo: 'bar' };

with (o) {
  console.log(foo);  // bar
}

o[Symbol.unscopables] = {
  foo: true
};

with (o) {
  console.log(foo);  // ReferenceError
}
