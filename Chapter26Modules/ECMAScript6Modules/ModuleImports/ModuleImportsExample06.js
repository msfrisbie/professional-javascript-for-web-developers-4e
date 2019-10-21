const foo = 'foo', bar = 'bar', baz = 'baz';
export { foo, bar, baz }
import * as Foo from './foo.js';

console.log(Foo.foo);  // foo 
console.log(Foo.bar);  // bar
console.log(Foo.baz);  // baz
