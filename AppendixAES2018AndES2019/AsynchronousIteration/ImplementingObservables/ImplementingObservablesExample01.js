class Observable {
  constructor() {
    this.promiseQueue = [];
    
    // Holds the resolver for the next promise in the queue
    this.resolve = null;
    
    // Pushes the initial promise on the queue which will
    // resolve with the first observed event
    this.enqueue();
  }
  
  // Create a new promise, save its resolve method, and
  // store it on the queue
  enqueue() {
    this.promiseQueue.push(
      new Promise((resolve) => this.resolve = resolve));
  }
  
  // Remove the promise at the front of the queue and
  // return it
  dequeue() {
    return this.promiseQueue.shift();
  }
}
