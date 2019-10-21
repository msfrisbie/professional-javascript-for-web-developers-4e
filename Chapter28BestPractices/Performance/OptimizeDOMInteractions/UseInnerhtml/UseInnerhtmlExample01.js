let list = document.getElementById("myList"),
  html = "";
           
for (let i = 0; i < 10; i++) {
  html += `<li>Item ${i}</li>`;
}
           
list.innerHTML = html;
