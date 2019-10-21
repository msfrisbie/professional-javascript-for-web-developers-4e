// Remove the "user" class
let targetClass = "user";
                   
// First, get list of class names
let classNames = div.className.split(/\s+/);
                   
// Find the class name to remove
let idx = classNames.indexOf(targetClass);
                   
// Remove the class name if found
if (idx > -1) { 
  classNames.splice(i,1);
}
                   
// Set back the class name
div.className = classNames.join(" ");
