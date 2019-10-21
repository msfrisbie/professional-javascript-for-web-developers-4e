let num = 0;
let max = 10;
           
let incrementNumber = function() {
  num++;
           
  //if the max has not been reached, set another timeout
  if (num < max) {
    setTimeout(incrementNumber, 500);
  } else {
    alert("Done");
  }
}
           
setTimeout(incrementNumber, 500);
