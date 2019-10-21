let range1 = document.createRange();
let range2 = document.createRange();
let p1 = document.getElementById("p1");
           
range1.selectNodeContents(p1);
range2.selectNodeContents(p1);
range2.setEndBefore(p1.lastChild);
           
console.log(range1.compareBoundaryPoints(Range.START_TO_START, range2));  // 0
console.log(range1.compareBoundaryPoints(Range.END_TO_END, range2));      // 1
