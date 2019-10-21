let processor = new XSLTProcessor()
processor.importStylesheet(xsltdom);
           
// do some transformations
           
processor.reset();
processor.importStylesheet(xsltdom2);
           
// do more transformations
