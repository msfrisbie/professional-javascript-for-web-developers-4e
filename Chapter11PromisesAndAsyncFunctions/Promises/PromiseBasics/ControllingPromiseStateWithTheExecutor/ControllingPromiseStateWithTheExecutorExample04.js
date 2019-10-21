let p = new Promise((resolve, reject) => {
  resolve();
  reject();  // No effect
});

setTimeout(console.log, 0, p);  // Promise <resolved>
