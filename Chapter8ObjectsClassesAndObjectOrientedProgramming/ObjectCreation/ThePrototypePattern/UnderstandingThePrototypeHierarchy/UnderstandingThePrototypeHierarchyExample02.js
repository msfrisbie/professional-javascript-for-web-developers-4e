function Person() {}
           
Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function() {
  console.log(this.name);
};
           
let person1 = new Person();
let person2 = new Person();
           
person1.name = "Greg";
console.log(person1.name);   // "Greg" - from instance
console.log(person2.name);   // "Nicholas" - from prototype
           
delete person1.name;
console.log(person1.name);   // "Nicholas" - from the prototype 
ObjectPrototypeHierarchyExample02.js
In this modified example, delete is called on person1.name, which previously had been shadowed with the value "Greg". This restores the link to the prototype’s name property, so the next time person1.name is accessed, it’s the prototype property’s value that is returned.
