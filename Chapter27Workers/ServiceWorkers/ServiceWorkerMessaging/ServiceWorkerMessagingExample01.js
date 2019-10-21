self.onmessage = ({data, source}) => {
  console.log('service worker heard:', data);

  source.postMessage('bar');
};

main.js
navigator.serviceWorker.onmessage = ({data}) => {
  console.log('client heard:', data);
};

navigator.serviceWorker.register('./serviceWorker.js')
.then((registration) => {
  if (registration.active) {
    registration.active.postMessage('foo');
  }
});

// service worker heard: foo
// client heard: bar
