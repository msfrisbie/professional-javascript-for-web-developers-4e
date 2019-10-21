form.addEventListener("submit", (event) => {
  let target = event.target;
  
  target.elements["comments"].value = 
      frames["richedit"].document.body.innerHTML;
});
