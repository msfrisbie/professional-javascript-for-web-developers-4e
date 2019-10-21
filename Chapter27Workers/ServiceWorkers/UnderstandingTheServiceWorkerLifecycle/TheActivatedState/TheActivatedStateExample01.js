navigator.serviceWorker.register('./serviceWorker.js')
.then((registration) => {
  if (registration.active) {
    console.log('Service worker is in the activating/activated state');
  }
});
