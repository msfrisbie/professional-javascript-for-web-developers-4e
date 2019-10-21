var btn = document.getElementById("myBtn");
      
// create event object
var event = document.createEventObject();
      
// initialize the event object
event.screenX = 100;
event.screenY = 0;
event.clientX = 0;
event.clientY = 0;
event.ctrlKey = false;
event.altKey = false;
event.shiftKey = false;
event.button = 0;
      
// fire the event
btn.fireEvent("onclick", event);
