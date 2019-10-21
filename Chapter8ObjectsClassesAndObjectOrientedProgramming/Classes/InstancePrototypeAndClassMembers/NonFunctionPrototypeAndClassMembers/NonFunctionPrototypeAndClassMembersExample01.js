class Person {
  sayName() {
    console.log(`${Person.greeting} ${this.name}`);
  }
}

// Define data member on class
Person.greeting = 'My name is';

// Define data member on prototype
Person.prototype.name = 'Jake';

let p = new Person();
p.sayName();  // My name is Jake 
ClassDataMembersExample01.js
