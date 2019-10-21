function King() {
  this.royaltyName = 'Henry';

  // 'this' will be the King instance
  setTimeout(() => console.log(this.royaltyName), 1000);
}

function Queen() {
  this.royaltyName = 'Elizabeth';

  // 'this' will be the window object
  setTimeout(function() { console.log(this.royaltyName); }, 1000);
}

new King();   // Henry
new Queen();  // undefined
