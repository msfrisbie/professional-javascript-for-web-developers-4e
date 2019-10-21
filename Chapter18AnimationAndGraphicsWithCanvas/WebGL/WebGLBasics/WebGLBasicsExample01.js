let drawing = document.getElementById("drawing");
         
// make sure <canvas> is completely supported
if (drawing.getContext) {
      
  let gl = drawing.getContext("webgl", { alpha: false });
  if (gl) {
    // proceed with WebGL
  }
}
