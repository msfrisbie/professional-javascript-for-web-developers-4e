let value = 5;
let exponent = 'second';

// Formerly, interpolation was accomplished as follows:
let interpolatedString = 
  value + ' to the ' + exponent + ' power is ' + (value * value);

// The same thing accomplished with template literals:
let interpolatedTemplateLiteral = 
  `${ value } to the ${ exponent } power is ${ value * value }`;

console.log(interpolatedString);           // 5 to the second power is 25
console.log(interpolatedTemplateLiteral);  // 5 to the second power is 25
