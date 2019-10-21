var textbox = document.getElementById("myTextbox");
      
// create event object
var event = document.createEventObject();
      
// initialize the event object
event.altKey = false;
event.ctrlKey = false;
event.shiftKey = false;
event.keyCode = 65;
      
// fire the event
textbox.fireEvent("onkeypress", event);
