let colors = new Array();                 // create an array
let count = colors.push("red", "green");  // push two items
alert(count);                             // 2
           
count = colors.push("black");  // push another item on
alert(count);                  // 3
           
let item = colors.pop();  // get the last item
alert(item);              // "black"
alert(colors.length);     // 2
