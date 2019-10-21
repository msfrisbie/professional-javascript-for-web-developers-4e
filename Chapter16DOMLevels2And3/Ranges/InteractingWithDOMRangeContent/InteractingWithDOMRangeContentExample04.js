let p1 = document.getElementById("p1"),
    helloNode = p1.firstChild.firstChild,
    worldNode = p1.lastChild,
    range = document.createRange();
           
range.setStart(helloNode, 2);
range.setEnd(worldNode, 3);
           
let fragment = range.extractContents();
p1.parentNode.appendChild(fragment);
