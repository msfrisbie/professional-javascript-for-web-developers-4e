if (element.tagName == "div"){  // AVOID! Error prone!
  // do something here
}
           
if (element.tagName.toLowerCase() == "div"){ // Preferred - works in all documents
  // do something here
}
