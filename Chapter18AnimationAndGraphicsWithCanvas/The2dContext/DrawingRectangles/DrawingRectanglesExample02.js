let drawing = document.getElementById("drawing");
         
// make sure <canvas> is completely supported
if (drawing.getContext) {
  let context = drawing.getContext("2d");
         
  /*
   * Based on Mozilla’s documentation: 
   * http:// developer.mozilla.org/en/docs/Canvas_tutorial:Basic_usage
   */
         
  // draw a red outlined rectangle
  context.strokeStyle = "#ff0000";
  context.strokeRect(10, 10, 50, 50);
         
  // draw a blue outlined rectangle that’s semi-transparent
  context.strokeStyle = "rgba(0,0,255,0.5)";
  context.strokeRect(30, 30, 50, 50);
}
