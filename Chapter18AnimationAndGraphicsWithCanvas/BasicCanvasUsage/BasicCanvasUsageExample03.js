let drawing = document.getElementById("drawing");
         
// make sure <canvas> is completely supported
if (drawing.getContext) {
         
  // get data URI of the image
  let imgURI = drawing.toDataURL("image/png");
  
  // display the image
  let image = document.createElement("img");
  image.src = imgURI;
  document.body.appendChild(image);  
}
