let drawing = document.getElementById("drawing");
         
// make sure <canvas> is completely supported
if (drawing.getContext) {
         
  let context = drawing.getContext("2d");
  context.strokeStyle = "red";
  context.fillStyle = "#0000ff";
}
