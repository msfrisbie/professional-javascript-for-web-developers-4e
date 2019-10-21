let colors = new Array();                    // create an array
let count = colors.unshift("red", "green");  // push two items
alert(count);                                // 2
           
count = colors.unshift("black");  // push another item on
alert(count);                     // 3
           
let item = colors.pop();  // get the first item
alert(item);              // "green"
alert(colors.length);     // 2
