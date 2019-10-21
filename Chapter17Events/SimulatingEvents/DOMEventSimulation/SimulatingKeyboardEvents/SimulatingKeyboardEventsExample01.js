let textbox = document.getElementById("myTextbox"),
    event;
      
// create event object the DOM Level 3 way
if (document.implementation.hasFeature("KeyboardEvents", "3.0")) {
  event = document.createEvent("KeyboardEvent");
      
  // initialize the event object
  event.initKeyboardEvent("keydown", true, true, document.defaultView, "a", 
                          0, "Shift", 0);
}
// fire the event
textbox.dispatchEvent(event);
