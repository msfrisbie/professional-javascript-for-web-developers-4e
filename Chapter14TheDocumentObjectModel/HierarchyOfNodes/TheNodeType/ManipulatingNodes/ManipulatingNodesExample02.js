// assume multiple children for someNode
let returnedNode = someNode.appendChild(someNode.firstChild);
alert(returnedNode == someNode.firstChild);  // false
alert(returnedNode == someNode.lastChild);   // true
