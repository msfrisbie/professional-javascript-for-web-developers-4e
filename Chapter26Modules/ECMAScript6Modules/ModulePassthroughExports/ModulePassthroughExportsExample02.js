export const baz = 'origin:foo';
foo.js

export * from './foo.js';
export const baz = 'origin:bar';
bar.js
import { baz } from './bar.js';

console.log(baz);  // origin:bar
main.js
