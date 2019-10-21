textbox.addEventListener("paste", (event) => {
  let text = getClipboardText(event);
  
  if (!/^\d*$/.test(text)){
    event.preventDefault();
  }
});
