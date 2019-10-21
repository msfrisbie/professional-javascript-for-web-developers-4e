String.prototype.startsWith = function (text) {
  return this.indexOf(text) === 0;
};
           
let msg = "Hello world!";
console.log(msg.startsWith("Hello"));   // true
The startsWith() method in this example returns true if some given text occurs at the beginning of a string. The method is assigned to String.prototype, making it available to all strings in the environment. Since msg is a string, the String primitive wrapper is created behind the scenes, making startsWith() accessible.
