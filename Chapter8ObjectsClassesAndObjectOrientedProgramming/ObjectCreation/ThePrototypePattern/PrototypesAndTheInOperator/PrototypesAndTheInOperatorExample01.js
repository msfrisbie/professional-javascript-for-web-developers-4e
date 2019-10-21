function Person() {}
           
Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function() {
  console.log(this.name);
};
           
let person1 = new Person();
let person2 = new Person();
           
console.log(person1.hasOwnProperty("name"));  // false
console.log("name" in person1);  // true
           
person1.name = "Greg";
console.log(person1.name);   // "Greg" - from instance
console.log(person1.hasOwnProperty("name"));  // true
console.log("name" in person1);  // true
           
console.log(person2.name);   // "Nicholas" - from prototype
console.log(person2.hasOwnProperty("name"));  // false
console.log("name" in person2);  // true
           
delete person1.name;
console.log(person1.name);   // "Nicholas" - from the prototype
console.log(person1.hasOwnProperty("name"));  // false
console.log("name" in person1);  // true 
ObjectInOperatorExample01.js
