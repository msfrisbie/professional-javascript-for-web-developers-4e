function inheritPrototype(subType, superType) {
  let prototype = object(superType.prototype);  // create object
  prototype.constructor = subType;              // augment object
  subType.prototype = prototype;                // assign object
}
