let filesList = document.getElementById("files-list");
filesList.addEventListener("change", (event) => {
  let files = event.target.files,
      i = 0,
      len = files.length;
  
  while (i < len) {
    const f = files[i];
    console.log('${f.name} (${f.type}, ${f.size} bytes)`);
    i++;
  }
});
