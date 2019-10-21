function syncIteratorAsyncCount() {
  const asyncCounter = emitter[Symbol.asyncIterator]();
  
  for (const x of asyncCounter) {
    console.log(x);
  }
}

syncIteratorAsyncCount();
// TypeError: asyncCounter is not iterable
