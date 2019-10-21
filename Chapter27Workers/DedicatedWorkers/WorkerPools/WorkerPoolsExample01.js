class TaskWorker extends Worker {
  constructor(notifyAvailable, ...workerArgs) {
    super(...workerArgs);

    // Initialize as unavailable
    this.available = false;
    this.resolve = null;
    this.reject = null;

    // Worker pool will pass a callback so that the
    // worker can signal it needs another task
    this.notifyAvailable = notifyAvailable;

    // Worker script will send a 'ready' postmessage 
    // once fully initialized
    this.onmessage = () => this.setAvailable();
  }

  // Called by the worker pool to begin a new task
  dispatch({ resolve, reject, postMessageArgs }) {
    this.available = false;

    this.onmessage = ({ data }) => {
      resolve(data);
      this.setAvailable();
    };

    this.onerror = (e) => {
      reject(e);
      this.setAvailable();
    };

    this.postMessage(...postMessageArgs);
  }

  setAvailable() {
    this.available = true;
    this.resolve = null;
    this.reject = null;
    this.notifyAvailable();
  }
}
