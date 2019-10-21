let list = document.getElementById("myList"),
  item;
           
for (let i = 0; i < 10; i++) {
  item = document.createElement("li");
  list.appendChild(item);
  item.appendChild(document.createTextNode(`Item ${i}`);
}
