// Code to prevent multiple form submissions
let form = document.getElementById("myForm");

form.addEventListener("submit", (event) => {
  let target = event.target;
  
  // get the submit button
  let btn = target.elements["submit-btn"];

  // disable the submit button
  btn.disabled = true;
});
