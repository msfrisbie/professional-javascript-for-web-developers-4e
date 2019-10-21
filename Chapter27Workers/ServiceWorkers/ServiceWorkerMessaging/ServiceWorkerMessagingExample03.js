self.onmessage = ({data}) => {
  console.log('service worker heard:', data);
};

self.onactivate  = () => {
  self.clients.matchAll({includeUncontrolled: true})
  .then((clientMatches) => clientMatches[0].postMessage('foo'));
};

main.js
navigator.serviceWorker.onmessage = ({data, source}) => {
  console.log('client heard:', data);

  source.postMessage('bar');
};

navigator.serviceWorker.register('./serviceWorker.js')

// client heard: foo
// service worker heard: bar
