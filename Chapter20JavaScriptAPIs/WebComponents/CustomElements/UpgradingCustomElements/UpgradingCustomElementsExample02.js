// Create HTMLUnknownElement object before custom element definition
const fooElement = document.createElement('x-foo');

// Define custom element
class FooElement extends HTMLElement {}
customElements.define('x-foo', FooElement);

console.log(fooElement instanceof FooElement);  // false

// Force the upgrade
customElements.upgrade(fooElement);

console.log(fooElement instanceof FooElement);  // true
