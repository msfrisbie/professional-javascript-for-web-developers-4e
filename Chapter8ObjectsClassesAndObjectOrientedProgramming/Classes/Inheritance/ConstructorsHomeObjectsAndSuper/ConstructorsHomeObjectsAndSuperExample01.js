class Vehicle {
  constructor() {
    this.hasEngine = true;
  }
}

class Bus extends Vehicle {
  constructor() {
    // Cannot reference 'this' before super(), will throw ReferenceError

    super();  // same as super.constructor()
    
    console.log(this instanceof Vehicle);  // true
    console.log(this);                     // Bus { hasEngine: true }
  }
}

new Bus();  
ClassInheritanceExample03.js
