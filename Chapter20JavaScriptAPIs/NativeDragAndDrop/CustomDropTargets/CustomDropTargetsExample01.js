let droptarget = document.getElementById("droptarget");
           
droptarget.addEventListener("dragover", (event) => {
  event.preventDefault();
});
           
droptarget.addEventListener("dragenter", (event) => {
  event.preventDefault();
});
