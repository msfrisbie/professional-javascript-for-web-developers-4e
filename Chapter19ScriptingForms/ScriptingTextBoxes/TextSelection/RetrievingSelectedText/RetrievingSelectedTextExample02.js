function getSelectedText(textbox){
  if (typeof textbox.selectionStart == "number"){
    return textbox.value.substring(textbox.selectionStart, 
                                   textbox.selectionEnd);                
  } else if (document.selection){
    return document.selection.createRange().text;
  }
}
