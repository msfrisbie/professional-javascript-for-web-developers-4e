let parentElement = document.getElementById('parent');
let currentChildElement = parentElement.firstElementChild;

// For zero children, firstElementChild returns null and the loop is skipped
while (currentChildElement) {
  // You already know this is an ELEMENT_NODE, do whatever work is needed here
  processChild(currentChildElement);

  if (currentChildElement === parentElement.lastElementChild) {
    break;
  }
  currentChildElement = currentChildElement.nextElementSibling;
}
