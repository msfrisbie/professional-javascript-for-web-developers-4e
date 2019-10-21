  fetch('https://fetch.spec.whatwg.org/')
    .then((response) => response.body)
    .then(async function(body) {
      let reader =  body.getReader();

      while(true) {
        let { value, done } = await reader.read();

        if (done) {
          break;
        }

        console.log(value);
      }
    });

// { value: Uint8Array{}, done: false }
// { value: Uint8Array{}, done: false }
// { value: Uint8Array{}, done: false }
// ... 
BodyReadableStreamExample03.js
