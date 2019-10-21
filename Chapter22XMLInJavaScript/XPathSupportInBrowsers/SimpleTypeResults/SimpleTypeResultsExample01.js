let result = xmldom.evaluate("employee/name", xmldom.documentElement, null, 
                  XPathResult.BOOLEAN_TYPE, null);
console.log(result.booleanValue);
In this example, if any nodes match "employee/name", the booleanValue property is equal to true.
