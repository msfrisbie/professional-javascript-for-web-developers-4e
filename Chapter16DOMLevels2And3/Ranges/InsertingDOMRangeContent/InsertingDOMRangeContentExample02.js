let p1 = document.getElementById("p1"),
    helloNode = p1.firstChild.firstChild,
    worldNode = p1.lastChild,
    range = document.createRange();
           
range.setStart(helloNode, 2);
range.setEnd(worldNode, 3);
           
let span = document.createElement("span");
span.style.color = "red";
span.appendChild(document.createTextNode("Inserted text"));
range.insertNode(span);
Running this JavaScript effectively creates the following HTML code:
<p id="p1"><b>He<span style="color: red">Inserted text</span>llo</b> world</p>
