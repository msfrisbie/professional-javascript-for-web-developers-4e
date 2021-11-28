// This template literal has 25 spaces following the line return character
let myTemplateLiteral = `first line
             second line`;
console.log(myTemplateLiteral.length); // 35

// This template literal begins with a line return character
let secondTemplateLiteral = `
first line
second line`;
console.log(secondTemplateLiteral[0] === "\n"); // true

// This template literal has no unexpected whitespace characters
let thirdTemplateLiteral = `first line
second line`;
console.log(thirdTemplateLiteral[0]);
// f