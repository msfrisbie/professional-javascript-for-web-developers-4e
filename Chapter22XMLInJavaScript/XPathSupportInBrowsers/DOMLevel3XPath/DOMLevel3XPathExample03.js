let result = xmldom.evaluate("employee/name", xmldom.documentElement, null, 
                  XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
if (result !== null) {
  for (let i = 0, len=result.snapshotLength; i < len; i++) {
    console.log(result.snapshotItem(i).tagName);
  }
}
