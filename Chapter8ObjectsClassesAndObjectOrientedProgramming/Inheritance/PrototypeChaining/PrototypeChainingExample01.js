function SuperType() {
  this.property = true;
}
           
SuperType.prototype.getSuperValue = function() {
  return this.property;
};
           
function SubType() {
  this.subproperty = false;
}
           
// inherit from SuperType
SubType.prototype = new SuperType();
           
SubType.prototype.getSubValue = function () {
  return this.subproperty;
};
           
let instance = new SubType();
console.log(instance.getSuperValue());  // true
ObjectPrototypeChainingExample01.js
This code defines two types: SuperType and SubType. Each type has a single property and a single method. The main difference between the two is that SubType inherits from SuperType by creating a new instance of SuperType and assigning it to SubType.prototype. This overwrites the original prototype and replaces it with a new object, which means that all properties and methods that typically exist on an instance of SuperType now also exist on SubType.prototype. After the inheritance takes place, a method is assigned to SubType.prototype, adding a new method on top of what was inherited from SuperType. The relationship between the instance and both constructors and prototypes is displayed in Figure 8-4.
Figure 8-4[c06f004.tif]
