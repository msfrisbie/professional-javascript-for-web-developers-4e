navigator.serviceWorker.register('./serviceWorker.js')
.then((registration) => {
  if (registration.waiting) {
    console.log('Service worker is in the installing/waiting state');
  }
});
