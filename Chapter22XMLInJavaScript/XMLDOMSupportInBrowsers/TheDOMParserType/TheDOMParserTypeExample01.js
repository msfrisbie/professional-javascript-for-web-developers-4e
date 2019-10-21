let parser = new DOMParser();
let xmldom = parser.parseFromString("<root><child/></root>", "text/xml");
           
console.log(xmldom.documentElement.tagName);  // "root"
console.log(xmldom.documentElement.firstChild.tagName); // "child"
           
let anotherChild = xmldom.createElement("child");
xmldom.documentElement.appendChild(anotherChild);
           
let children = xmldom.getElementsByTagName("child");
console.log(children.length);   // 2
