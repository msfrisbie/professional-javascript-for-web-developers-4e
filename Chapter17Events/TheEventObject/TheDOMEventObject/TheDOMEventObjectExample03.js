let btn = document.getElementById("myBtn");
btn.onclick = function(event) {
  console.log(event.currentTarget === this);  // true
  console.log(event.target === this);         // true
};
