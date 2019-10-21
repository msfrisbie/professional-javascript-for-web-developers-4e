import foo, * as Foo './foo.js';

foo = 'foo';      // Error

Foo.foo = 'foo';  // Error

foo.bar = 'bar';  // Allowed
