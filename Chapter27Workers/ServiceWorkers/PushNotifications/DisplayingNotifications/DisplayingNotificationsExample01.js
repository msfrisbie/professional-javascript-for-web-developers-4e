navigator.serviceWorker.register('./serviceWorker.js')
.then((registration) => {
  Notification.requestPermission()
  .then((status) => {
    if (status === 'granted') {
      registration.showNotification('foo');
    }
  });
 });
