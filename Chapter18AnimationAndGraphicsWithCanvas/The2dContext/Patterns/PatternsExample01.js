let image = document.images[0],
  pattern = context.createPattern(image, "repeat");
// draw a rectangle
context.fillStyle = pattern;
context.fillRect(10, 10, 150, 150);
