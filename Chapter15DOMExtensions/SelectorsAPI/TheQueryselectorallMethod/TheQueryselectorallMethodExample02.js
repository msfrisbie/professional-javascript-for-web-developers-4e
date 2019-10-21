let strongElements = document.querySelectorAll("p strong");

// All three of the following loops will have the same effect:

for (let strong of strongElements) {
  strong.className = "important";
}

for (let i = 0; i < strongElements.length; ++i) {
  strongElements.item(i).className = "important";
}

for (let i = 0; i < strongElements.length; ++i) {
  strongElements [i].className = "important";
}
