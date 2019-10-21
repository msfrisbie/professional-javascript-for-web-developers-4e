let filesList = document.getElementById("files-list");
filesList.addEventListener("change", (event) => {
  let info = "",
    output = document.getElementById("output"),
    progress = document.getElementById("progress"),
    files = event.target.files,
    reader = new FileReader(),
    url = window.URL.createObjectURL(files[0]);
  if (url) {
    if (/image/.test(files[0].type)) {
      output.innerHTML = `<img src="${url}">`;
    } else {
      output.innerHTML = "Not an image.";
    }
  } else {
    output.innerHTML = "Your browser doesn’t support object URLs.";
  }
});
