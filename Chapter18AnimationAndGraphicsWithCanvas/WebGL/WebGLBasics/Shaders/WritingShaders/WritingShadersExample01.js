// OpenGL Shading Language
// Shader by Bartek Drozdz in his article at
// http:// www.netmagazine.com/tutorials/get-started-webgl-draw-square
attribute vec2 aVertexPosition;
 
void main() {
  gl_Position = vec4(aVertexPosition, 0.0, 1.0);
}
