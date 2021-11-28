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

// NOTE   It's not recommended to use with, so using Symbol.unscopables is also not recommended.