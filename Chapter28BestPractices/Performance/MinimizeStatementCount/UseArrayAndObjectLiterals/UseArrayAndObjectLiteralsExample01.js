// four statements to create and initialize array - wasteful
let values = new Array();
values[0] = 123;
values[1] = 456;
values[2] = 789;
           
// four statements to create and initialize object - wasteful
let person = new Object();
person.name = "Nicholas";
person.age = 29;
person.sayName = function() {
  console.log(this.name);
};
