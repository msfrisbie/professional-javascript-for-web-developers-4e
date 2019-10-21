function Person() {}

Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function() {
  console.log(this.name);
};

let keys = Object.keys(Person.prototype);
console.log(keys);    // "name,age,job,sayName"
let p1 = new Person();
p1.name = "Rob";
p1.age = 31;
let p1keys = Object.keys(p1);
console.log(p1keys);  // "name,age" 
ObjectInOperatorExample03.js
Here, the keys variable is filled with an array containing "name", "age", "job", and "sayName". This is the order in which they would normally appear using for-in. When called on an instance of Person, Object.keys() returns an array of name and age, the only two instance properties.
