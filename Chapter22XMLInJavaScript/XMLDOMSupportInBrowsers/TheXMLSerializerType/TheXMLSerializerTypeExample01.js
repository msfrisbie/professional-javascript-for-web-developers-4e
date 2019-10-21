let serializer = new XMLSerializer();
let xml = serializer.serializeToString(xmldom);
console.log(xml);
The value returned from serializeToString() is a string that is not pretty-printed, so it may be difficult to read with the naked eye.
