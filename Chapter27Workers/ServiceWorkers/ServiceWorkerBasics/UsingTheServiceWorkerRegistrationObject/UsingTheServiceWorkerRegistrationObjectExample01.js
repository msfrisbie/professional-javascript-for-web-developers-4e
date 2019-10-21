navigator.serviceWorker.register('./serviceWorker.js')
.then((registrationA) => {
  console.log(registrationA);

  navigator.serviceWorker.register('./serviceWorker2.js')
    .then((registrationB) => {
console.log(registrationA === registrationB);
    });
});
