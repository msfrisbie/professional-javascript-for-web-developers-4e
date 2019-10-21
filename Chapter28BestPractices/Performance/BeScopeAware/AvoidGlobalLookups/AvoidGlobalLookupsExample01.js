function updateUI() {
  let imgs = document.getElementsByTagName("img");
  for (let i = 0, len = imgs.length; i < len; i++) {
    imgs[i].title = `${document.title} image ${i}`;
  }
           
  let msg = document.getElementById("msg");
  msg.innerHTML = "Update complete."; 
}
