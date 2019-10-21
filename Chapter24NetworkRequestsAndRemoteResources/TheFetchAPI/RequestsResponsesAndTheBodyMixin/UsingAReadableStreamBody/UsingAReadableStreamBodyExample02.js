  fetch('https://fetch.spec.whatwg.org/')
    .then((response) => response.body)
    .then((body) => {
      let reader = body.getReader();

      function processNextChunk({value, done}) {
        if (done) {
          return;
        }

        console.log(value);

        return reader.read()
            .then(processNextChunk);
      }
        
      return reader.read()
          .then(processNextChunk);
    });

// { value: Uint8Array{}, done: false }
// { value: Uint8Array{}, done: false }
// { value: Uint8Array{}, done: false }
// ... 
BodyReadableStreamExample02.js
