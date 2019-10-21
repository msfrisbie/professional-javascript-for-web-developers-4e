let nsresolver = xmldom.createNSResolver(xmldom.documentElement);
           
let result = xmldom.evaluate("wrox:book/wrox:author", 
               xmldom.documentElement, nsresolver,
               XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
           
console.log(result.snapshotLength);
