function SuperType() {
  this.colors = ["red", "blue", "green"];
}
           
function SubType() {}
           
// inherit from SuperType
SubType.prototype = new SuperType();
           
let instance1 = new SubType();
instance1.colors.push("black");
console.log(instance1.colors);  // "red,blue,green,black"
           
let instance2 = new SubType();
console.log(instance2.colors);  // "red,blue,green,black" 
ObjectPrototypeChainingExample01.js
In this example, the SuperType constructor defines a property, colors, that contains an array (a reference value). Each instance of SuperType has its own colors property containing its own array. When SubType inherits from SuperType via prototype chaining, SubType.prototype becomes an instance of SuperType and so it gets its own colors property, which is akin to specifically creating SubType.prototype.colors. The end result: all instances of SubType share a colors property. This is indicated as the changes made to instance1.colors are reflected on instance2.colors.
