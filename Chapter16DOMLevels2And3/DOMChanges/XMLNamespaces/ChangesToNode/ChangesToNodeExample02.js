console.log(document.body.isDefaultNamespace("http://www.w3.org/1999/xhtml")); // true
           
// assume svg contains a reference to <s:svg>
console.log(svg.lookupPrefix("http://www.w3.org/2000/svg"));  // "s"
console.log(svg.lookupNamespaceURI("s"));  // "http://www.w3.org/2000/svg"
