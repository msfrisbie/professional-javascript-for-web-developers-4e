// Abstract base class
class Vehicle {
  constructor() {
    console.log(new.target);
    if (new.target === Vehicle) {
      throw new Error('Vehicle cannot be directly instantiated');
    }
  }
}

// Derived class
class Bus extends Vehicle {}

new Bus();      // class Bus {}
new Vehicle();  // class Vehicle {}
// Error: Vehicle cannot be directly instantiated
AbstractBaseClassExample01.js
