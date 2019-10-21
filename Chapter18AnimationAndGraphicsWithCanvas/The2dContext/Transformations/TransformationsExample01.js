let drawing = document.getElementById("drawing");
         
// make sure <canvas> is completely supported
if (drawing.getContext) {
  let context = drawing.getContext("2d");
  
  // start the path
  context.beginPath();
         
  // draw outer circle
  context.arc(100, 100, 99, 0, 2 * Math.PI, false);
  
  // draw inner circle
  context.moveTo(194, 100);
  context.arc(100, 100, 94, 0, 2 * Math.PI, false);
         
  // translate to center
  context.translate(100, 100);
  
  // draw minute hand
  context.moveTo(0,0);
  context.lineTo(0, -85);
  
  // draw hour hand
  context.moveTo(0, 0);
  context.lineTo(-65, 0);
  
  // stroke the path
  context.stroke();
}
