let selectbox = document.forms[0].elements["location"];
            
// not recommended
let text = selectbox.options[0].firstChild.nodeValue;     // option text
let value = selectbox.options[0].getAttribute("value");   // option value
