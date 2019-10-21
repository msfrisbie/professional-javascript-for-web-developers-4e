let nsresolver = function(prefix) {
  switch(prefix) {
    case "wrox": return "http:// www.wrox.com/";
    // others here
  }
};
           
let result = xmldom.evaluate("count(wrox:book/wrox:author)", 
        xmldom.documentElement, nsresolver, XPathResult.NUMBER_TYPE, null);
           
console.log(result.numberValue);
