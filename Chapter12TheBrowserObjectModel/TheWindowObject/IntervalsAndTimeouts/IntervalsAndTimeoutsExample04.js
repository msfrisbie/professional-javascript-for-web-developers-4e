let num = 0, intervalId = null;
let max = 10;
           
let incrementNumber = function() {
  num++;
           
  // if the max has been reached, cancel all pending executions
  if (num == max) {
    clearInterval(intervalId);
    alert("Done");
  }
}
           
intervalId = setInterval(incrementNumber, 500);
