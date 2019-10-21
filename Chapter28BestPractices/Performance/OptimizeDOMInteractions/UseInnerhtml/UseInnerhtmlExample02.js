let list = document.getElementById("myList");
           
for (let i = 0; i < 10; i++) {
  list.innerHTML += `<li>Item ${i}</li>`;   // AVOID!!!
}
