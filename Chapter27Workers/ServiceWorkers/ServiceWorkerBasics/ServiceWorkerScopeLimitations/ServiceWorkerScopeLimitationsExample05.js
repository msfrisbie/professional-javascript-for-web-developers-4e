navigator.serviceWorker.register('/foo/serviceWorker.js', {scope: '/'});

// Error: The path of the provided scope 'https://example.com/' 
// is not under the max scope allowed 'https://example.com/foo/'
