let btn = document.getElementById("myBtn");
btn.onclick = function(event) {
  console.log(event.eventPhase);   // 2
};
      
document.body.addEventListener("click", (event) => {
  console.log(event.eventPhase);   // 1
}, true);
      
document.body.onclick = (event) => {
  console.log(event.eventPhase);   // 3
};
