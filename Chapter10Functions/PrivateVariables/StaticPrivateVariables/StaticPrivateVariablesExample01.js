(function() {         
  // private variables and functions
  let privateVariable = 10;
                   
  function privateFunction() {
    return false;
  }
                   
  // constructor
  MyObject = function() {};
                   
  // public and privileged methods
  MyObject.prototype.publicMethod = function() {
    privateVariable++;
    return privateFunction();
  };                 
})();
