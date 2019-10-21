let list = document.getElementById("myLinks");
      
list.addEventListener("click", (event) => {
  let target = event.target;
      
  switch(target.id) {
    case "doSomething":
      document.title = "I changed the document's title";
      break;
      
    case "goSomewhere":
      location.href = "http:// www.wrox.com";
      break;
      
    case "sayHi":
      console.log("hi");
      break;
  }
});
