navigator.serviceWorker.register('/foo/serviceWorker.js')
.then((serviceWorkerRegistration) => {
  console.log(serviceWorkerRegistration.scope);
  // https://example.com/foo/
});

// All of the following would be intercepted: 
// fetch('/foo/fooScript.js');

// All of the following would not be intercepted: 
// fetch('/foo.js'); 
// fetch('/baz/bazScript.js'); 
