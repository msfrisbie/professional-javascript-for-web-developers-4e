navigator.serviceWorker.register('/serviceWorker.js', {scope: './'})
.then((serviceWorkerRegistration) => {
  console.log(serviceWorkerRegistration.scope);
  // https://example.com/
});

// All of the following would be intercepted:
// fetch('/foo.js'); 
// fetch('/foo/fooScript.js');
// fetch('/baz/bazScript.js'); 
