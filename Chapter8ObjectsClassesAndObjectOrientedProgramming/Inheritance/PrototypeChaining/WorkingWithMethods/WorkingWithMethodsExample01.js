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
           
// new method
SubType.prototype.getSubValue = function () {
  return this.subproperty;
};
           
// override existing method
SubType.prototype.getSuperValue = function () {
  return false;
};
           
let instance = new SubType();
console.log(instance.getSuperValue());   // false
ObjectMethodExample01.js
In this code, the highlighted area shows two methods. The first is getSubValue(), which is a new method on the SubType. The second is getSuperValue(), which already exists in the prototype chain but is being shadowed here. When getSuperValue() is called on an instance of SubType, it will call this one, but instances of SuperType will still call the original. The important thing to note is that both of the methods are defined after the prototype has been assigned as an instance of SuperType.
