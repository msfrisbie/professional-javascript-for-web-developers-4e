var color = "blue";
           
function changeColor() {
  let anotherColor = "red";
           
  function swapColors() {
    let tempColor = anotherColor;
    anotherColor = color;
    color = tempColor;
    
    // color, anotherColor, and tempColor are all accessible here
  }
           
  // color and anotherColor are accessible here, but not tempColor    
  swapColors();
}
           
// only color is accessible here
changeColor();
