// Named inline exports 
export const baz = 'baz'; 
export const foo = 'foo', bar = 'bar';
export function foo() {}
export function* foo() {}
export class Foo {} 

// Named clause exports
export { foo };
export { foo, bar };
export { foo as myFoo, bar };

// Default exports 
export default 'foo';
export default 123;
export default /[a-z]*/;
export default { foo: 'foo' };
export { foo, bar as default }; 
export default foo
export default function() {} 
export default function foo() {}
export default function*() {}
export default class {}

// Various disallowed forms that will cause errors:

// Variable declarations cannot occur inside inline default exports
export default const foo = 'bar';

// Only identifiers can appear in export clauses
export { 123 as foo }'

// Aliasing only can occur in export clauses
export const foo = 'foo' as myFoo;
