let result = xmldom.evaluate("employee/name", xmldom.documentElement, null, 
                  XPathResult.FIRST_ORDERED_NODE_TYPE, null);
           
if (result !== null) {
  console.log(result.singleNodeValue.tagName);
}
