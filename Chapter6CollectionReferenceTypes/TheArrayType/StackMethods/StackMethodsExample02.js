let colors = ["red", "blue"];
colors.push("brown");          // add another item
colors[3] = "black";           // add an item
alert(colors.length);          // 4
           
let item = colors.pop();       // get the last item
alert(item);                   // "black"
