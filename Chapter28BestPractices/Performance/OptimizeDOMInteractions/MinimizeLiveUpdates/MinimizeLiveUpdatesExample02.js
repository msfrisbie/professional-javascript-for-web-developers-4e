let list = document.getElementById("myList"),
  fragment = document.createDocumentFragment(),
  item;
           
for (let i = 0; i < 10; i++) {
  item = document.createElement("li");
  fragment.appendChild(item);
  item.appendChild(document.createTextNode("Item " + i));
}
           
list.appendChild(fragment);
