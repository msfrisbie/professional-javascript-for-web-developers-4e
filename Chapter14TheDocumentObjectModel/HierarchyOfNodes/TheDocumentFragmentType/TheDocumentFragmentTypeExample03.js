let fragment = document.createDocumentFragment();
let ul = document.getElementById("myList");
           
for (let i = 0; i < 3; ++i) {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(`Item ${i + 1}`));
  fragment.appendChild(li);
}
           
ul.appendChild(fragment);  
