function getSelectedText(textbox){
  return textbox.value.substring(textbox.selectionStart, 
                                 textbox.selectionEnd);
}
