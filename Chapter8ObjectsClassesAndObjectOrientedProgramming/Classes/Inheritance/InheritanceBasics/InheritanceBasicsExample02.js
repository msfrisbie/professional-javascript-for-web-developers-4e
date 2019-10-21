class Vehicle {
  identifyPrototype(id) {
    console.log(id, this);
  }
  
  static identifyClass(id) {
    console.log(id, this);
  }
}

class Bus extends Vehicle {}

let v = new Vehicle();
let b = new Bus();

b.identifyPrototype('bus');        // bus, Bus {}
v.identifyPrototype('vehicle');    // vehicle, Vehicle {}

Bus.identifyClass('bus');          // bus, class Bus {}
Vehicle.identifyClass('vehicle');  // vehicle, class Vehicle {} 
ClassInheritanceExample02.js
