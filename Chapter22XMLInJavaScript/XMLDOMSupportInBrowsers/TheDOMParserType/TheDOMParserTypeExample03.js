let parser = new DOMParser(),
  xmldom, 
  errors;
try {
  xmldom = parser.parseFromString("<root>", "text/xml");
  errors = xmldom.getElementsByTagName("parsererror");
  if (errors.length > 0) {
    throw new Error("Parsing error!");
  }
} catch (ex) {
  console.log("Parsing error!");
}
