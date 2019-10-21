let btn = document.getElementById("myBtn");
btn.onclick = function(event) {
  console.log("Clicked");
  event.stopPropagation();
};
      
document.body.onclick = function(event) {
  console.log("Body clicked");
};
