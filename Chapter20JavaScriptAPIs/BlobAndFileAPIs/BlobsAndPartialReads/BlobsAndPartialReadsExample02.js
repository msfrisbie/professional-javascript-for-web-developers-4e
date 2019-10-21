let filesList = document.getElementById("files-list");
filesList.addEventListener("change", (event) => {
  let info = "",
    output = document.getElementById("output"),
    progress = document.getElementById("progress"),
    files = event.target.files,
    reader = new FileReader(),
    blob = blobSlice(files[0], 0, 32);
  if (blob) {
    reader.readAsText(blob);
    
    reader.onerror = function() {
      output.innerHTML = "Could not read file, error code is " + 
                 reader.error.code;
    };
    reader.onload = function() {
      output.innerHTML = reader.result;
    };
  } else {
    console.log("Your browser doesn’t support slice().");
  }
});
