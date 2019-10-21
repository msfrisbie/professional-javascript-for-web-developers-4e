let itemsHtml = "";
for (let value of values){
  itemsHtml += `<li>${value}</li>`;
} 
ul.innerHTML = itemsHtml;
