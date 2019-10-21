fetch('https://fetch.spec.whatwg.org/')
  .then((response) => response.body)
  .then((body) => {
    const reader = body.getReader();

    // create secondary stream
    return new ReadableStream({
      async start(controller) {
        try {
          while (true) {
            const { value, done } = await reader.read();

            if (done) {
              break;
            }

            // Push the body stream's chunk onto the secondary stream
            controller.enqueue(value);
          }
        } finally {
          controller.close();
          reader.releaseLock();
        }
      }
    })
  })
  .then((secondaryStream) => new Response(secondaryStream))
  .then(response => response.text())
  .then(console.log); 

// <!doctype html><html lang="en"><head><meta charset="utf-8"> ... 
BodyReadableStreamExample07.js
