let colors = ["red", "green", "blue"];
let newColors = ["black", "brown"];
let moreNewColors = {
  [Symbol.isConcatSpreadable]: true,
  length: 2,
  0: "pink",
  1: "cyan"
};

newColors[Symbol.isConcatSpreadable] = false;

// Force the array to not be flattened
let colors2 = colors.concat("yellow", newColors);

// Force the array-like object to be flattened
let colors3 = colors.concat(moreNewColors);
           
alert(colors);   // ["red", "green","blue"]    
alert(colors2);  // ["red", "green", "blue", "yellow", ["black", "brown"]] 
alert(colors3);  // ["red", "green", "blue", "pink, "cyan"] 
