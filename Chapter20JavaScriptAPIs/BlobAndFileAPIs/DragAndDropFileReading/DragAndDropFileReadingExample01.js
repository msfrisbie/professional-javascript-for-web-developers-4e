let droptarget = document.getElementById("droptarget");
function handleEvent(event) {
  let info = "",
    output = document.getElementById("output"),
    files, i, len;      
  event.preventDefault();
  
  if (event.type == "drop") {
    files = event.dataTransfer.files;
    i = 0;
    len = files.length;
  
    while (i < len) {
      info += `${files[i].name} (${files[i].type}, ${files[i].size} bytes)<br>`;
      i++;
    }
    
    output.innerHTML = info;
  }
}
droptarget.addEventListener("dragenter", handleEvent);
droptarget.addEventListener("dragover", handleEvent);
droptarget.addEventListener("drop", handleEvent);    
