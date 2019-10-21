let r1 = new Request('https://foo.com');
let r2 = new Request(r1);

console.log(r2.url);  // https://foo.com/
CloneRequestObjectExample01.js
