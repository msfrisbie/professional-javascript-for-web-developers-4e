fetch('/hangs-forever')
  .then((response) => {
    console.log(response);
  }, (err) => {
    console.log(err);
  });

// (after browser timeout duration)
// TypeError: "NetworkError when attempting to fetch resource."
FetchExample10.js
