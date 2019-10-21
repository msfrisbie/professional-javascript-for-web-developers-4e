let singleton = function() {
  // private variables and functions
  let privateVariable = 10;
                   
  function privateFunction() {
    return false;
  }
                   
  // create object
  let object = new CustomType();
                   
  // add privileged/public properties and methods
  object.publicProperty = true;
                   
  object.publicMethod = function() {
    privateVariable++;
    return privateFunction();
  };
                   
  // return the object
  return object;
}();
