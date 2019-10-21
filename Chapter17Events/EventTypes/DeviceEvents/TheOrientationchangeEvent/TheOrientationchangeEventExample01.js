window.addEventListener("load", (event) => {
  let div = document.getElementById("myDiv");
  div.innerHTML = "Current orientation is " + window.orientation;
  
  window.addEventListener("orientationchange", (event) => {) {
    div.innerHTML = "Current orientation is " + window.orientation;
  });
});
