let result = xmldom.evaluate("employee/name", xmldom.documentElement, null, 
                  XPathResult.ORDERED_NODE_ITERATOR_TYPE, null);
           
if (result !== null) {
  let element = result.iterateNext();
  while(element) {
    console.log(element.tagName);
    node = result.iterateNext();
  }
}
