window.addEventListener("deviceorientation", (event) => {
  let output = document.getElementById("output");
  output.innerHTML = 
    `Alpha=${event.alpha}, Beta=${event.beta], Gamma=${event.gamma$}<br>`;
});
