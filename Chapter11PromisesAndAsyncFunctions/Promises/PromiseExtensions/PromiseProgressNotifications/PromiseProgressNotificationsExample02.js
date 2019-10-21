let p = new TrackablePromise((resolve, reject, notify) => {
  function countdown(x) {
    if (x > 0) {
       notify(`${20 * x}% remaining`);
       setTimeout(() => countdown(x - 1), 1000);
    } else {
      resolve();
    }
  }

  countdown(5);
}); 
PromiseProgressNotificationExample02.js
