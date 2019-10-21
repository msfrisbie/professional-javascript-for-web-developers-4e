let textbox = document.forms[0].elements[0];

textbox.addEventListener("focus", (event) => {
  let target = event.target;
  if (target.style.backgroundColor != "red") {
    target.style.backgroundColor = "yellow";
  }
});
            
textbox.addEventListener("blur", (event) => {
  let target = event.target;
  target.style.backgroundColor = /[^\d]/.test(target.value) ? "red" : "";
});

textbox.addEventListener("change", (event) => {
  let target = event.target;
  target.style.backgroundColor = /[^\d]/.test(target.value) ? "red" : "";
});
