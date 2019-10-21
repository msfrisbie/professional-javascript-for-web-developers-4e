let textbox = document.getElementById("myText");
textbox.addEventListener("keypress", (event) => {
  console.log(EventUtil.getCharCode(event));   
});
