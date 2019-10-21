window.addEventListener("load", (event) => {
  let div = document.getElementById("myDiv");
        
  div.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    
    let menu = document.getElementById("myMenu");
    menu.style.left = event.clientX + "px";
    menu.style.top = event.clientY + "px";
    menu.style.visibility = "visible";
  });
  
  document.addEventListener("click", (event) => {
    document.getElementById("myMenu").style.visibility = "hidden";
  });
});
