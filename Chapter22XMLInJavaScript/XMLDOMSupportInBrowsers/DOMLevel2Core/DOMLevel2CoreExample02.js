let xmldom = document.implementation.createDocument("", "root", null);
           
console.log(xmldom.documentElement.tagName);  // "root"
           
let child = xmldom.createElement("child");
xmldom.documentElement.appendChild(child);
