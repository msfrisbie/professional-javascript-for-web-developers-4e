function Person() {}
           
Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function() {
  console.log(this.name);
};
           
let person = new Person();    
console.log(hasPrototypeProperty(person, "name"));  // true
           
person.name = "Greg";
console.log(hasPrototypeProperty(person, "name"));  // false     
ObjectInOperatorExample02.js
In this code, the name property first exists on the prototype, so hasPrototypeProperty() returns true. Once the name property is overwritten, it exists on the instance, so hasPrototypeProperty() returns false. Even though the name property still exists on the prototype, it is no longer used because the instance property now exists.
