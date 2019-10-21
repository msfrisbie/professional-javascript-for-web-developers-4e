window.addEventListener("load", (event) => {
  let element = document.forms[0].elements[0];

  if (element.autofocus !== true) {
    element.focus();
    console.log("JS focus");
  }
});
