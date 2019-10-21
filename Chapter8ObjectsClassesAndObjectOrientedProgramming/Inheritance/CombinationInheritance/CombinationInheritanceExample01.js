function SuperType(name){
  this.name = name;
  this.colors = ["red", "blue", "green"];
}
           
SuperType.prototype.sayName = function() {
  console.log(this.name);
};
           
function SubType(name, age){  
  // inherit properties
  SuperType.call(this, name);
  
  this.age = age;
}
           
// inherit methods
SubType.prototype = new SuperType();
           
SubType.prototype.sayAge = function() {
  console.log(this.age);
};
           
let instance1 = new SubType("Nicholas", 29);
instance1.colors.push("black");
console.log(instance1.colors);  // "red,blue,green,black"
instance1.sayName();            // "Nicholas";
instance1.sayAge();             // 29
           
let instance2 = new SubType("Greg", 27);
console.log(instance2.colors);  // "red,blue,green"
instance2.sayName();            // "Greg";
instance2.sayAge();             // 27
CombinationInheritanceExample01.js
In this example, the SuperType constructor defines two properties, name and colors, and the SuperType prototype has a single method called sayName(). The SubType constructor calls the SuperType constructor, passing in the name argument, and defines its own property, called age. Additionally, the SubType prototype is assigned to be an instance of SuperType, and then a new method, called sayAge(), is defined. With this code, it’s then possible to create two separate instances of SubType that have their own properties, including the colors property, but all use the same methods.
