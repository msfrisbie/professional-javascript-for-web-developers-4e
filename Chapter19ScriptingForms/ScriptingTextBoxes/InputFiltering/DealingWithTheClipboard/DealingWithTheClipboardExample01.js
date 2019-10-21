function getClipboardText(event){
  var clipboardData =  (event.clipboardData || window.clipboardData);
  return clipboardData.getData("text");
}
    
function setClipboardText (event, value){
  if (event.clipboardData){
    return event.clipboardData.setData("text/plain", value);
  } else if (window.clipboardData){
    return window.clipboardData.setData("text", value);
  }
}
