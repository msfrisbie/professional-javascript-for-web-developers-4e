let stringValue = "hello world";
console.log(stringValue.slice(-3));         // "rld"
console.log(stringValue.substring(-3));     // "hello world"
console.log(stringValue.substr(-3));        // "rld"
console.log(stringValue.slice(3, -4));      // "lo w"
console.log(stringValue.substring(3, -4));  // "hel"
console.log(stringValue.substr(3, -4));     // "" (empty string)
