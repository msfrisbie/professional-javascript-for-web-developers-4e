let btn = document.getElementById("myBtn");
      
// create event object
let event = document.createEvent("MouseEvents");
      
// initialize the event object
event.initMouseEvent("click", true, true, document.defaultView, 
                     0, 0, 0, 0, 0, false, false, false, false, 0, null);
      
// fire the event
btn.dispatchEvent(event);
