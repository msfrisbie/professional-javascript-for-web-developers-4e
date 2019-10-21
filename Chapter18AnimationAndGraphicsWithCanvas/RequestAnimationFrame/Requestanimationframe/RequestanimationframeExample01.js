function updateProgress() {
  var div = document.getElementById("status");
  div.style.width = (parseInt(div.style.width, 10) + 5) + "%";
  if (div.style.left != "100%") {
  requestAnimationFrame(updateProgress);
  }
}
requestAnimationFrame(updateProgress);
