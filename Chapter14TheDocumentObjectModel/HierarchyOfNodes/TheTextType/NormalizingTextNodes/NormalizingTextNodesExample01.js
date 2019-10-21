let element = document.createElement("div");
element.className = "message";
           
let textNode = document.createTextNode("Hello world!");
element.appendChild(textNode);
           
let anotherTextNode = document.createTextNode("Yippee!");
element.appendChild(anotherTextNode);
           
document.body.appendChild(element);
           
alert(element.childNodes.length);     // 2
           
element.normalize();
alert(element.childNodes.length);     // 1
alert(element.firstChild.nodeValue);  // "Hello world!Yippee!"
