let btn = document.getElementById("myBtn");
btn.onclick = function(event) {
  console.log("Clicked");
  event = EventUtil.getEvent(event);
  EventUtil.stopPropagation(event);
};
      
document.body.onclick = function(event) {
  console.log("Body clicked");
};
