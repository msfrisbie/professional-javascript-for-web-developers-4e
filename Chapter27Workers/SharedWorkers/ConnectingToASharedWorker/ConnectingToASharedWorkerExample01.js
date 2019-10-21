let i = 0;
self.onconnect = () => console.log(`connected ${++i} times`);

main.js
for (let i = 0; i < 5; ++i) {
  new SharedWorker('./sharedWorker.js');
}

// connected 1 times
// connected 2 times
// connected 3 times
// connected 4 times
// connected 5 times
