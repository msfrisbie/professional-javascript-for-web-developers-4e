// determine if the browser has Netscape-style plugins
let hasNSPlugins = !!(navigator.plugins && navigator.plugins.length);
           
// determine if the browser has basic DOM Level 1 capabilities
let hasDOM1 = !!(document.getElementById && document.createElement && 
         document.getElementsByTagName);
