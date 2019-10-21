let r1 = new Request('https://foo.com');
let r2 = new Request(r1, {method: 'POST'});

console.log(r1.method);  // GET
console.log(r2.method);  // POST
CloneRequestObjectExample02.js
