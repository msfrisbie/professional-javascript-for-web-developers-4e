...

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

p.notify((x) => setTimeout(console.log, 0, 'progress:', x));

p.then(() => setTimeout(console.log, 0, 'completed'));

// (after 1s) 80% remaining
// (after 2s) 60% remaining
// (after 3s) 40% remaining
// (after 4s) 20% remaining
// (after 5s) completed 
PromiseProgressNotificationExample02.js
