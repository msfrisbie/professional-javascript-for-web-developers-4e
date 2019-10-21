// viewport is a quarter of the <canvas> in the lower-left corner
gl.viewport(0, 0, drawing.width/2, drawing.height/2);
// viewport is a quarter of the <canvas> in the upper-left corner
gl.viewport(0, drawing.height/2, drawing.width/2, drawing.height/2);
// viewport is a quarter of the <canvas> in the lower-right corner
gl.viewport(drawing.width/2, 0, drawing.width/2, drawing.height/2);
