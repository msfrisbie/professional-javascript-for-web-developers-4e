const request1 = new Request('https://www.foo.com');
const response1 = new Response('fooResponse');

caches.open('v1')
.then((cache) => {
  cache.put(request1, response1)
  .then(() => cache.keys())
  .then(console.log)   // [Request]
  .then(() => cache.delete(request1))
  .then(() => cache.keys())
  .then(console.log);  // []
});
To check a Cache, you have two methods at your disposal:
matchAll(request, options)—Returns a promise, which resolves to an array of matching cache Response objects. 
This method is useful in scenarios where you wish to perform a bulk action upon similarly organized cache entries, such as deleting all the cached values inside the /images directory. 
The request matching schema can be configured via an options object, described later in this section.
match(request, options)—Returns a promise, which resolves to a matching cache Response object, or undefined if there are no cache hits. 
This is essentially equivalent to matchAll(request, options)[0]. 
The request matching schema can be configured via an options object, described later in this section.
Cache hits are determined by matching URL strings and/or Request URLs. URL strings and Request objects are interchangeable, as the match is determined by extracting the Request object's URL. This interchangeability is demonstrated here:
const request1 = 'https://www.foo.com';
const request2 = new Request('https://www.bar.com');

const response1 = new Response('fooResponse');
const response2 = new Response('barResponse');

caches.open('v1').then((cache) => {
  cache.put(request1, response1)
  .then(() => cache.put(request2, response2))
  .then(() => cache.match(new Request('https://www.foo.com')))
  .then((response) => response.text())
  .then(console.log)   // fooResponse
  .then(() => cache.match('https://www.bar.com'))
  .then((response) => response.text())
  .then(console.log);  // barResponse
});
