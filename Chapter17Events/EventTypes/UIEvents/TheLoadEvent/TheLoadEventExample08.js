window.addEventListener("load", () => {  
  let link = document.createElement("link");
  link.type = "text/css";
  link.rel= "stylesheet";
  link.addEventListener("load", (event) => {
    console.log("css loaded");
  });
  link.href = "example.css";
  document.getElementsByTagName("head")[0].appendChild(link);
});
