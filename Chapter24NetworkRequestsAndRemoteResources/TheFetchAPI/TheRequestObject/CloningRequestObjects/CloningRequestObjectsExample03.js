let r1 = new Request('https://foo.com',
                     { method: 'POST', body: 'foobar' });
let r2 = new Request(r1);

console.log(r1.bodyUsed);  // true
console.log(r2.bodyUsed);  // false
CloneRequestObjectExample03.js
