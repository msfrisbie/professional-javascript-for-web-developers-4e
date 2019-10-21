let btn = document.getElementById("myBtn");
let handler = function() {
  console.log("Clicked");
};
EventUtil.addHandler(btn, "click", handler);
      
// other code here
      
EventUtil.removeHandler(btn, "click", handler);
