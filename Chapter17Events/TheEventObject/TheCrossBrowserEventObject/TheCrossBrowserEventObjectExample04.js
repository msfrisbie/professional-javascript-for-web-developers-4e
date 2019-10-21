let link = document.getElementById("myLink");
link.onclick = function(event) {
  event = EventUtil.getEvent(event);
  EventUtil.preventDefault(event);
};
