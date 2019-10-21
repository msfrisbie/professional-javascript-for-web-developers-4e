class Person {
  constructor() {
    // Everything added to 'this' will exist on each individual instance
    this.locate = () => console.log('instance');
  }
  
  // Everything defined in the class body is defined on the class prototype object
  locate() {
    console.log('prototype');
  }
}

let p = new Person();

p.locate();                 // instance
Person.prototype.locate();  // prototype
InstanceMethodExample01.js
