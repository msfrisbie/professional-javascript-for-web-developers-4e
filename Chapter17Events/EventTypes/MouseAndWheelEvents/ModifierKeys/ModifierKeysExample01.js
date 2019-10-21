let div = document.getElementById("myDiv");
div.addEventListener("click", (event) => {
  let keys = new Array();
      
  if (event.shiftKey) {
    keys.push("shift");
  }
      
  if (event.ctrlKey) {
    keys.push("ctrl");
  }
      
  if (event.altKey) {
    keys.push("alt");
  }
      
  if (event.metaKey) {
    keys.push("meta");
  }
      
  console.log("Keys: " + keys.join(","));
      
});
