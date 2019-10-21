fetch('https://foo.com')
  .then((response) => {
    response.blob();  // First call locks the stream
    response.blob();  // Second call attempts to lock the stream and fails
  });

// TypeError: Failed to execute 'blob' on 'Response': body stream is locked
let request = new Request('https://foo.com',
                          { method: 'POST', body: 'foobar' });

request.blob();  // First call locks the stream
request.blob();  // Second call attempts to lock the stream and fails
// TypeError: Failed to execute 'blob' on 'Request': body stream is locked
BodyStreamExample02.js
