// open a new v1 cache,
// check for the v1 cache,
// check for the nonexistent v2 cache

caches.open('v1')
.then(() => caches.has('v1'))
.then(console.log)   // true
.then(() => caches.has('v2'))
.then(console.log);  // false

CacheStorageExample02.js
// open a new v1 cache,
// check for the v1 cache,
// delete the v1 cache,
// check again for the deleted v1 cache

caches.open('v1')
.then(() => caches.has('v1'))
.then(console.log)   // true
.then(() => caches.delete('v1'))
.then(() => caches.has('v1'))
.then(console.log);  // false

CacheStorageExample03.js
// open a v1, v3, and v2 cache
// check keys of current caches
// NOTE: cache keys are printed in creation order

caches.open('v1') 
.then(() => caches.open('v3'))
.then(() => caches.open('v2'))
.then(() => caches.keys())
.then(console.log);  // ["v1", "v3", "v2"]
