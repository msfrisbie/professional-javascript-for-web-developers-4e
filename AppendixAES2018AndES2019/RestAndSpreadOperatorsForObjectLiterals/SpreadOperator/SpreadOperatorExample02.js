const foo = { a: 1 };
const bar = { b: 2 };

const foobar = {c: 3, ...bar, ...foo};

console.log(foobar);
// { c: 3, b: 2, a: 1} 

const baz = { c: 4 };

const foobarbaz = {...foo, ...bar, c: 3, ...baz };

console.log(foobarbaz);
// { a: 1, b: 2, c: 4 }
