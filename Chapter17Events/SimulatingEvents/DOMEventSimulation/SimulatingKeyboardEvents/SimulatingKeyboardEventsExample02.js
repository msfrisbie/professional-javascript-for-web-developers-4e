// for Firefox only
let textbox = document.getElementById("myTextbox");
      
// create event object
let event = document.createEvent("KeyEvents");
      
// initialize the event object
event.initKeyEvent("keydown", true, true, document.defaultView, false, 
                   false, true, false, 65, 65);
      
// fire the event
textbox.dispatchEvent(event);
