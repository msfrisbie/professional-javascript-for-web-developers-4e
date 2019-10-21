var btn = document.getElementById("myBtn");
btn.onclick = function() {
  console.log("Clicked");
  window.event.cancelBubble = true;
};
      
document.body.onclick = function() {
  console.log("Body clicked");
};
