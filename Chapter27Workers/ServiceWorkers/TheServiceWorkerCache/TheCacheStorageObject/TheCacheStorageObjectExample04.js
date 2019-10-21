// Create one request key and two response values
const request = new Request('');
const response1 = new Response('v1');
const response2 = new Response('v2');

// Use same key in both caches. v1 is found first since it has
// caches.keys() order priority
caches.open('v1')
.then((v1cache) => v1cache.put(request, response1))
.then(() => caches.open('v2'))
.then((v2cache) => v2cache.put(request, response2))
.then(() => caches.match(request))
.then((response) => response.text())
.then(console.log);  // v1
