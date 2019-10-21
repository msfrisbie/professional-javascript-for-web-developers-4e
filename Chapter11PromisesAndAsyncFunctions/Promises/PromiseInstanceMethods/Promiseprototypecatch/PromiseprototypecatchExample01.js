let p = Promise.reject();
let onRejected = function(e) {
  setTimeout(console.log, 0, 'rejected');
};

// These two reject handlers behave identically:
p.then(null, onRejected);  // rejected
p.catch(onRejected);       // rejected 
PromiseCatchExample02.js
