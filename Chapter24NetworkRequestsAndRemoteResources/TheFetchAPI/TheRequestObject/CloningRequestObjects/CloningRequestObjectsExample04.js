let r1 = new Request('https://foo.com', { method: 'POST', body: 'foobar' });
let r2 = r1.clone();

console.log(r1.url);       // https://foo.com/
console.log(r2.url);       // https://foo.com/

console.log(r1.bodyUsed);  // false
console.log(r2.bodyUsed);  // false
CloneRequestObjectExample04.js
