let item1 = document.getElementById("goSomewhere");
let item2 = document.getElementById("doSomething");
let item3 = document.getElementById("sayHi");
      
item1.addEventListener("click", (event) => {
  location.href = "http:// www.wrox.com";
});
      
item2.addEventListener("click", (event) => {
  document.title = "I changed the document's title";
});
      
item3.addEventListener("click", (event) => {
  console.log("hi");
});
