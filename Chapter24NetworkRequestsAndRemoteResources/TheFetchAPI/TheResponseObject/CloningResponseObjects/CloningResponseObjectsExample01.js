let r1 = new Response('foobar');
let r2 = r1.clone();

console.log(r1.bodyUsed);  // false
console.log(r2.bodyUsed);  // false
CloningResponseObjectExample01.js
