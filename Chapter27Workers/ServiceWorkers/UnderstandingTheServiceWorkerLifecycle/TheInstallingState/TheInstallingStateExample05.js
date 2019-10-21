const CACHE_KEY = 'v1';

self.oninstall = (installEvent) => {
  installEvent.waitUntil(
    caches.open(CACHE_KEY)
    .then((cache) => cache.addAll([
      'foo.js',
      'bar.html',
      'baz.css',
    ]))
  );
}; 
