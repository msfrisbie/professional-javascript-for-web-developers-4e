let element = document.createElement("div");
element.className = "message";
           
let textNode = document.createTextNode("Hello world!");
element.appendChild(textNode);
           
document.body.appendChild(element);
