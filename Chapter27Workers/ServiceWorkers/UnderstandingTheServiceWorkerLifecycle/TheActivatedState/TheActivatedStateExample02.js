navigator.serviceWorker.register('./serviceWorker.js')
.then((registration) => {
  if (registration.controller) {
    console.log('Service worker is in the activated state');
  }
});
