var btn = document.getElementById("myBtn");
btn.attachEvent("onclick", function(event) {
  console.log(event.type);  // "click"
});
