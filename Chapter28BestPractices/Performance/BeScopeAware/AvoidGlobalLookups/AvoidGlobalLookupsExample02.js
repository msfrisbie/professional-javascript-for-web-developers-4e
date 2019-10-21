function updateUI() {
  let doc = document;
  let imgs = doc.getElementsByTagName("img");
  for (let i = 0, len = imgs.length; i < len; i++) {
    imgs[i].title = `${doc.title} image ${i}`;
  }
           
  let msg = doc.getElementById("msg");
  msg.innerHTML = "Update complete."; 
}
