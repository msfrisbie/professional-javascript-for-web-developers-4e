self.onfetch = (fetchEvent) => {
  fetchEvent.respondWith(
    // Begin with 'Return from cache with network fallback' stragegy
    caches.match(fetchEvent.request)
    .then((response) => response || fetch(fetchEvent.request))
    .catch(() => caches.match('/fallback.html'))
  );
};
