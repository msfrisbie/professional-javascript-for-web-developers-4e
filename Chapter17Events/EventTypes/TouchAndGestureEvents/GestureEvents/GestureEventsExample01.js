function handleGestureEvent(event) {    
  let output = document.getElementById("output");
  switch(event.type) {
    case "gesturestart":
      output.innerHTML += `Gesture started: ` +
                          `rotation=${event.rotation},` +
                          `scale=${event.scale}`;
      break;
    case "gestureend":
      output.innerHTML += `Gesture ended: ` +
                          `rotation=${event.rotation},` +
                          `scale=${event.scale}`;
      break;
    case "gesturechange":
      output.innerHTML += `Gesture changed: ` +
                          `rotation=${event.rotation},` +
                          `scale=${event.scale}`;
      break;
  }
}
      
document.addEventListener("gesturestart", handleGestureEvent, false);
document.addEventListener("gestureend", handleGestureEvent, false);
document.addEventListener("gesturechange", handleGestureEvent, false);
