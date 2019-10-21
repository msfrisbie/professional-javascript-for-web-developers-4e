let element = document.createElement("div");
element.className = "message";
           
let textNode = document.createTextNode("Hello world!");
element.appendChild(textNode);
           
document.body.appendChild(element);
           
let newNode = element.firstChild.splitText(5);
alert(element.firstChild.nodeValue);  // "Hello"
alert(newNode.nodeValue);             // " world!"
alert(element.childNodes.length);     // 2
