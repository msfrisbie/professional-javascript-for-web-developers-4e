textbox.addEventListener("keypress", (event) => {
  if (!/\d/.test(String.fromCharCode(event.charCode)) && 
      event.charCode > 9 && 
      !event.ctrlKey){
    event.preventDefault();
  }
});
