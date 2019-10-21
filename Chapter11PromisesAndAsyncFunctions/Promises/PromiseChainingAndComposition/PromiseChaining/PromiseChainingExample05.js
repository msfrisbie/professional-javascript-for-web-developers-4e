function delayedExecute(str, callback = null) {
  setTimeout(() => {
    console.log(str);
    callback && callback();
  }, 1000)
}

delayedExecute('p1 callback', () => {
  delayedExecute('p2 callback', () => {
    delayedExecute('p3 callback', () => {
      delayedExecute('p4 callback');
    });
  });
});

// p1 callback (after 1s)
// p2 callback (after 2s)
// p3 callback (after 3s)
// p4 callback (after 4s)
PromiseChainingExample04.js
