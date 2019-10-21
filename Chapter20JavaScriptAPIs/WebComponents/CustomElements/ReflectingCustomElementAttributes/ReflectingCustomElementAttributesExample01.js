document.body.innerHTML = `<x-foo></x-foo>`;

class FooElement extends HTMLElement {
  constructor() {
    super();
    
    this.bar = true;
  }
  
  get bar() {
    return this.getAttribute('bar');
  }
  
  set bar(value) {
    this.setAttribute('bar', value)
  }
}
customElements.define('x-foo', FooElement);

console.log(document.body.innerHTML);
// <x-foo bar="true"></x-foo>
