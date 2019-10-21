let drawing = document.getElementById("drawing");
         
// make sure <canvas> is completely supported
if (drawing.getContext) {
  let gl = drawing.getContext("webgl");
  if (gl) {
    // proceed with WebGL
  }
}
