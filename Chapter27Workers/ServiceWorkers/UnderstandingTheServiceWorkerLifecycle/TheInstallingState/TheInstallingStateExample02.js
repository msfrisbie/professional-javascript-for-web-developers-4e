navigator.serviceWorker.register('./serviceWorker.js')
.then((registration) => {
  registration.onupdatefound = () =>
    console.log('Service worker is in the installing state');
  };
}); 
