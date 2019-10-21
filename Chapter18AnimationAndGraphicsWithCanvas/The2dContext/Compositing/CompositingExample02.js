// draw a red rectangle
context.fillStyle = "#ff0000";
context.fillRect(10, 10, 50, 50);
// set composite operation
context.globalCompositeOperation = "destination-over";
// draw a blue rectangle
context.fillStyle = "rgba(0,0,255,1)";
context.fillRect(30, 30, 50, 50);
