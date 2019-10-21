let btn = document.getElementById("myBtn");
btn.addEventListener("click", () => {
  console.log(this.id);
}, false);
      
// other code here
      
btn.removeEventListener("click", function() {   // won't work!
  console.log(this.id);
}, false);
