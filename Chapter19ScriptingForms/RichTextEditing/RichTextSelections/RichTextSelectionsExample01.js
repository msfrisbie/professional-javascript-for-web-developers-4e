let selection = frames["richedit"].getSelection();
            
// get selected text
let selectedText = selection.toString();
            
// get the range representing the selection
let range = selection.getRangeAt(0);
            
// highlight the selected text
let span = frames["richedit"].document.createElement("span");
span.style.backgroundColor = "yellow";
range.surroundContents(span);
