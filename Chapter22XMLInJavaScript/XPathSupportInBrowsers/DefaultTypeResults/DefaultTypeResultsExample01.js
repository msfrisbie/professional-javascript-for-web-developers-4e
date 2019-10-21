let result = xmldom.evaluate("employee/name", xmldom.documentElement, null, 
                  XPathResult.ANY_TYPE, null);
           
if (result !== null) {
  switch(result.resultType) {
    case XPathResult.STRING_TYPE:
      // handle string type
      break;
           
    case XPathResult.NUMBER_TYPE:
      // handle number type
      break;
           
    case XPathResult.BOOLEAN_TYPE:
      // handle boolean type
      break;
           
    case XPathResult.UNORDERED_NODE_ITERATOR_TYPE:
      // handle unordered node iterator type
      break;
           
    default:
      // handle other possible result types
           
  }
}
