// Create element to be shadow host
document.body.innerHTML = `
<div onclick="console.log('Handled outside:', event.target)"></div>
`;

// Attach shadow DOM and insert HTML into it
document.querySelector('div')
  .attachShadow({ mode: 'open' })
  .innerHTML = `
<button onclick="console.log('Handled inside:', event.target)">Foo</button>
`;

// When clicking the button:
// Handled inside:  <button onclick="..."></button>
// Handled outside: <div onclick="..."></div>
