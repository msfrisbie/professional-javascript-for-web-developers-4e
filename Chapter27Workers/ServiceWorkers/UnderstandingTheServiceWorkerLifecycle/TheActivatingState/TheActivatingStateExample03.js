const CACHE_KEY = 'v3';

self.oninstall = (activateEvent) => {
  caches.keys()
  .then((keys) => keys.filter((key) => key != CACHE_KEY))
  .then((oldKeys) => oldKeys.forEach((oldKey) => caches.delete(oldKey));
};
