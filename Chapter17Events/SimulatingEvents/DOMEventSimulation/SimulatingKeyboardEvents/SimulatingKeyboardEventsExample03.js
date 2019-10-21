let textbox = document.getElementById("myTextbox");
      
// create event object
let event = document.createEvent("Events");
      
// initialize the event object
event.initEvent(type, bubbles, cancelable);
event.view = document.defaultView;
event.altKey = false;
event.ctrlKey = false;
event.shiftKey = false;
event.metaKey = false;
event.keyCode = 65;
event.charCode = 65;
      
// fire the event
textbox.dispatchEvent(event);
