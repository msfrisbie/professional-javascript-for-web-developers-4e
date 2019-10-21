let p1 = document.getElementById("p1"),
    helloNode = p1.firstChild.firstChild,
    worldNode = p1.lastChild,
    range = document.createRange();
           
range.setStart(helloNode, 2);
range.setEnd(worldNode, 3);
           
range.deleteContents();
Figure 16-8[c12f008.tif]
