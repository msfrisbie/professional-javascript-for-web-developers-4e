var btn = document.getElementById("myBtn");
var handler = function() {
  console.log("Clicked");
};
btn.attachEvent("onclick", handler);
      
// other code here
      
btn.detachEvent("onclick", handler);
