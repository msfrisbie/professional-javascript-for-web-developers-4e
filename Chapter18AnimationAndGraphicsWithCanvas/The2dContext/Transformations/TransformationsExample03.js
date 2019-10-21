context.fillStyle = "#ff0000";
context.save();
         
context.fillStyle = "#00ff00";
context.translate(100, 100);
context.save();
         
context.fillStyle = "#0000ff";
context.fillRect(0, 0, 100, 200);   // draws blue rectangle at (100, 100)
         
context.restore();
context.fillRect(10, 10, 100, 200);   // draws green rectangle at (110, 110)
         
context.restore();
context.fillRect(0, 0, 100, 200);  // draws red rectangle at (0,0)
