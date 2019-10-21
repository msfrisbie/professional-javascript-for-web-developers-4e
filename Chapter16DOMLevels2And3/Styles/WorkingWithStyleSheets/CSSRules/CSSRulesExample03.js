let sheet = document.styleSheets[0];
let rules = sheet.cssRules || sheet.rules;  // get rules list
let rule = rules[0];              // get first rule
rule.style.backgroundColor = "red"
