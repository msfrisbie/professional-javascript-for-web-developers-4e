navigator.serviceWorker.register('./serviceWorker.js')
.then((registration) => {
  if (registration.installing) {
    console.log('Service worker is in the installing state');
  }
});
