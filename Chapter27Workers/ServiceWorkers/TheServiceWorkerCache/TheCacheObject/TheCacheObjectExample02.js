const request1 = new Request('https://www.foo.com');
const response1 = new Response('fooResponse');

caches.open('v1')
.then((cache) => {
  cache.put(request1, response1)
  .then(() => cache.keys())
  .then((keys) => console.log(keys[0] === request1))         // false
  .then(() => cache.match(request1))
  .then((response) => console.log(response === response1));  // false
});
