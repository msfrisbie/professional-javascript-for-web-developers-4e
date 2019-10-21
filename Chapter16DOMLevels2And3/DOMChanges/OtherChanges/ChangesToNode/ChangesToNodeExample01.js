let div1 = document.createElement("div");
div1.setAttribute("class", "box");
           
let div2 = document.createElement("div");
div2.setAttribute("class", "box");
           
console.log(div1.isSameNode(div1));   // true
console.log(div1.isEqualNode(div2));  // true
console.log(div1.isSameNode(div2));   // false
