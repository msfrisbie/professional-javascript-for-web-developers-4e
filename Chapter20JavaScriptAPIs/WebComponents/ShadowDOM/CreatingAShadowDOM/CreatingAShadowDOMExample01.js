document.body.innerHTML = `
  <div id="foo"></div>
  <div id="bar"></div>
`;

const foo = document.querySelector('#foo'); 
const bar = document.querySelector('#bar');

const openShadowDOM = foo.attachShadow({ mode: 'open' }); 
const closedShadowDOM = bar.attachShadow({ mode: 'closed' });

console.log(openShadowDOM);    // #shadow-root (open) 
console.log(closedShadowDOM);  // #shadow-root (closed)

console.log(foo.shadowRoot);   // #shadow-root (open)
console.log(bar.shadowRoot);   // null
