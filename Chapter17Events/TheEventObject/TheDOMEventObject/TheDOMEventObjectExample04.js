document.body.onclick = function(event) {
  console.log(event.currentTarget === document.body);              // true
  console.log(this === document.body);                             // true
  console.log(event.target === document.getElementById("myBtn"));  // true
};
