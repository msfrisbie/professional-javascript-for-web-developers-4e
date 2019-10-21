class Person {
  constructor() {
    // Everything added to 'this' will exist on each individual instance
    this.locate = () => console.log('instance', this);
  }
  
  // Defined on the class prototype object
  locate() {
    console.log('prototype', this);
  }

  // Defined on the class
  static locate() {
    console.log('class', this);
  }
}

let p = new Person();

p.locate();                 // instance, Person {}
Person.prototype.locate();  // prototype, {constructor: ... }
Person.locate();            // class, class Person {} 
StaticMethodExample01.js
