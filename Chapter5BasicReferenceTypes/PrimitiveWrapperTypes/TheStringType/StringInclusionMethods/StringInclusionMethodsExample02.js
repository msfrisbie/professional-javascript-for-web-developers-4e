let message = "foobarbaz";

console.log(message.startsWith("foo"));     // true
console.log(message.startsWith("foo", 1));  // false

console.log(message.includes("bar"));       // true
console.log(message.includes("bar", 4));    // false
