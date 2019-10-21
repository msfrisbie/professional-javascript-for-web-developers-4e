const CACHE_KEY = 'v1';

self.oninstall = (installEvent) => {
  // Populate the cache, then force the service worker
  // into the activated state. This triggers the 'activate' event.
  installEvent.waitUntil(
    caches.open(CACHE_KEY)
    .then((cache) => cache.addAll([
      'foo.css',
      'bar.js',
    ]))
    .then(() => self.skipWaiting())
  );
};

// Force the service worker to take control of the clients. This fires a
// controllerchange event on each client.
self.onactivate = (activateEvent) => clients.claim();
