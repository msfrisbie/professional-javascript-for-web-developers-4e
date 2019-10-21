let btn = document.getElementById("myBtn");
btn.onclick = function(event) {
  console.log(event.type);  // "click"
};
      
btn.addEventListener("click", (event) => {
  console.log(event.type);  // "click"
}, false);
