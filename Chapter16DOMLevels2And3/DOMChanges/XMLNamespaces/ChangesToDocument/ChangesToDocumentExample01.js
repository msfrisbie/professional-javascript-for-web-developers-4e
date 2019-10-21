// create a new SVG element
let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
           
// create new attribute for a random namespace
let att = document.createAttributeNS("http://www.somewhere.com", "random");
           
// get all XHTML elements
let elems = document.getElementsByTagNameNS("http://www.w3.org/1999/xhtml", "*");
