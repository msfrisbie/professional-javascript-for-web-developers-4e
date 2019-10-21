// Allowed
import { foo } from './fooModule.js';
console.log(foo);  // 'foo'

// Allowed, but avoid
console.log(foo);  // 'foo'
import { foo } from './fooModule.js';
