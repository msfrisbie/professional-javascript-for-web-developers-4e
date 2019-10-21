var btn = document.getElementById("myBtn");
btn.attachEvent("onclick", function() {
  console.log(this === window);   // true
});
