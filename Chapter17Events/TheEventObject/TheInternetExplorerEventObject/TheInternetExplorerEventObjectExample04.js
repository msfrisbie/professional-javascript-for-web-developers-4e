var btn = document.getElementById("myBtn");
btn.onclick = function() {
  console.log(window.event.srcElement === this);  // true
};
      
btn.attachEvent("onclick", function(event) {
  console.log(event.srcElement === this);         // false
});
