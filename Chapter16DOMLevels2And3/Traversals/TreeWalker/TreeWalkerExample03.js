let node = walker.nextNode();
console.log(node === walker.currentNode);  // true
walker.currentNode = document.body;        // change where to start from
