let attr = document.createAttribute("align");
attr.value = "left";
element.setAttributeNode(attr);
           
alert(element.attributes["align"].value);        // "left"
alert(element.getAttributeNode("align").value);  // "left"
alert(element.getAttribute("align"));            // "left"
