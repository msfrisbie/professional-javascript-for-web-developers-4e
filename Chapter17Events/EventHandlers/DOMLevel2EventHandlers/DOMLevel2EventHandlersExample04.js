let btn = document.getElementById("myBtn");
let handler = function() {
  console.log(this.id);
};
btn.addEventListener("click", handler, false);
      
// other code here
      
btn.removeEventListener("click", handler, false);  // works!
