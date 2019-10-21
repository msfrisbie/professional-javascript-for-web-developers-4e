let result = xmldom.evaluate("employee/name", xmldom.documentElement, null, 
                  XPathResult.STRING_TYPE, null);
console.log(result.stringValue);
