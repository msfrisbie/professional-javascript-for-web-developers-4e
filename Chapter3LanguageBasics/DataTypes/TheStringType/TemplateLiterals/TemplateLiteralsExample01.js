let myMultiLineString = 'first line\nsecond line';
let myMultiLineTemplateLiteral = `first line
second line`;

console.log(myMultiLineString);  
// first line
// second line"

console.log(myMultiLineTemplateLiteral);   
// first line
// second line

console.log(myMultiLineString === myMultiLinetemplateLiteral);   // true
