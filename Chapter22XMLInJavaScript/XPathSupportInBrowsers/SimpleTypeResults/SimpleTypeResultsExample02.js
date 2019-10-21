let result = xmldom.evaluate("count(employee/name)", xmldom.documentElement, 
                  null, XPathResult.NUMBER_TYPE, null);
console.log(result.numberValue);
