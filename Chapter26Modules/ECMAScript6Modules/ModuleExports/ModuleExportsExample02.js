// Allowed
const foo = 'foo';
export { foo };

// Allowed
export const foo = 'foo';

// Allowed, but avoid
export { foo };
const foo = 'foo';
