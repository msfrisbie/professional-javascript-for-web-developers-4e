function SuperType(name) {
  this.name = name;
  this.colors = ["red", "blue", "green"];
}
           
SuperType.prototype.sayName = function() {
  console.log(this.name);
};
           
function SubType(name, age){  
  SuperType.call(this, name);      // second call to SuperType()
  
  this.age = age;
}
           
SubType.prototype = new SuperType();   // first call to SuperType()
SubType.prototype.constructor = SubType;           
SubType.prototype.sayAge = function() {
  console.log(this.age);
};
ParasiticCominationInheritanceExample01.js
