let gradient = createRectLinearGradient(context, 30, 30, 50, 50);
gradient.addColorStop(0, "white");
gradient.addColorStop(1, "black");
// draw a gradient rectangle
context.fillStyle = gradient;
context.fillRect(30, 30, 50, 50);
