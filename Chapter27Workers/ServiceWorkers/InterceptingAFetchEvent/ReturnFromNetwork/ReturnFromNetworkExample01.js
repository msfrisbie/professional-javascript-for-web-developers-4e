self.onfetch = (fetchEvent) => {
  fetchEvent.respondWith(fetch(fetchEvent.requeest));
};
