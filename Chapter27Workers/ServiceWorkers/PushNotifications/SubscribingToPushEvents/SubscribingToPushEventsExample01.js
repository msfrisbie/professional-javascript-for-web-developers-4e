navigator.serviceWorker.register('./serviceWorker.js')
.then((registration) => {
  registration.pushManager.subscribe({
    applicationServerKey: key,  // derived from server's public key
    userVisibleOnly: true
  });
 });
