function createAnother(original){
  let clone = object(original);  // create a new object by calling a function
  clone.sayHi = function() {     // augment the object in some way
    console.log("hi");
  };
  return clone;           // return the object
}
ParasiticInheritanceExample01.js
