const readableStream = new ReadableStream({
  start(controller) {
    console.log(controller);  // ReadableStreamDefaultController {}
  }
});
