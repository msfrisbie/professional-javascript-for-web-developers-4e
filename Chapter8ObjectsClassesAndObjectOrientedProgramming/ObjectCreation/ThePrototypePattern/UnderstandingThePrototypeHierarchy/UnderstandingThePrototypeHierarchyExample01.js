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
ObjectPrototypeHierarchyExample01.js
In this example, the name property of person1 is shadowed by a new value. Both person1.name and person2.name still function appropriately, returning "Greg" (from the object instance) and "Nicholas" (from the prototype), respectively. When person1.name was accessed in the console.log(), its value was read, so the search began for a property called name on the instance. Because the property exists, it is used without searching the prototype. When person2.name is accessed the same way, the search doesn’t find the property on the instance, so it continues to search on the prototype where the name property is found.
