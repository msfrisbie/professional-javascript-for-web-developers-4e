let parentElement = document.getElementById('parent');
let currentChildNode = parentElement.firstChild;

// For zero children, firstChild returns null and the loop is skipped
while (currentChildNode) {
  if (currentChildNode.nodeType === 1) {
    // If this is an ELEMENT_NODE, do whatever work is needed in here
    processChild(currentChildNode);
  }
  if (currentChildNode === parentElement.lastChild) {
    break;
  }
  currentChildNode = currentChildNode.nextSibling;
}
