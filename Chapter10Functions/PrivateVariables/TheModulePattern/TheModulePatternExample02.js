let singleton = function() {              
  // private variables and functions
  let privateVariable = 10;
                   
  function privateFunction() {
    return false;
  }
                   
  // privileged/public methods and properties
  return {      
    publicProperty: true,
                   
    publicMethod() {
      privateVariable++;
      return privateFunction();
    }     
  };
}();
