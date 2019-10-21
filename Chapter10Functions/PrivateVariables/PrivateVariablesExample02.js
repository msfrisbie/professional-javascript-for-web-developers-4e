function MyObject() {
  // private variables and functions
  let privateVariable = 10;
                   
  function privateFunction() {
    return false;
  }
                   
  // privileged methods   
  this.publicMethod = function() {
    privateVariable++;
    return privateFunction();
  };
}
