let sheet = document.styleSheets[0];
let rules = sheet.cssRules || sheet.rules;  // get rules list
let rule = rules[0];              // get first rule
console.log(rule.selectorText);           // "div.box"
console.log(rule.style.cssText);          // complete CSS code
console.log(rule.style.backgroundColor);      // "blue"
console.log(rule.style.width);            // "100px"
console.log(rule.style.height);           // "200px"
