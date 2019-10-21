let person = new Object();
person.name = "Nicholas";
person.age = 29;
person.job = "Software Engineer";
           
person.sayName = function() {
  console.log(this.name);
};
This example creates an object called person that has three properties (name, age, and job) and one method (sayName()). The sayName() method displays the value of this.name, which resolves to person.name. Early JavaScript developers used this pattern frequently to create new objects. A few years later, object literals became the preferred pattern for creating such objects. The previous example can be rewritten using object literal notation as follows:
let person = {
  name: "Nicholas",
  age: 29,
  job: "Software Engineer",
  sayName() {
    console.log(this.name);
  }
};
