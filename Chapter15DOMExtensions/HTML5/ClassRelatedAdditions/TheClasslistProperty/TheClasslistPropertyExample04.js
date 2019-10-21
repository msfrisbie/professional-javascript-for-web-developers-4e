// Remove the "disabled" class
div.classList.remove("disabled");
                   
// Add the "current" class
div.classList.add("current");
                   
// Toggle the "user" class
div.classList.toggle("user");
                   
// Figure out what's on the element now
if (div.classList.contains("bd") && !div.classList.contains("disabled")){
  // Do stuff 
)
                   
// Iterate over the class names
for (let class of div.classList){
  doStuff(class);
}
