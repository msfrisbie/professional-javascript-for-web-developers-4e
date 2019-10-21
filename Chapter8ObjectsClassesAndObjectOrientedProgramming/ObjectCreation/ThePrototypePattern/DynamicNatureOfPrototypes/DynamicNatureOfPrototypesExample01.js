let friend = new Person();
           
Person.prototype.sayHi = function() {
  console.log("hi");
};
           
friend.sayHi();  // "hi" - works!
In this code, an instance of Person is created and stored in friend. The next statement adds a method called sayHi() to Person.prototype. Even though the friend instance was created prior to this change, it still has access to the new method. This happens because of the loose link between the instance and the prototype. When friend.sayHi() is called, the instance is first searched for a property named sayHi; when it’s not found, the search continues to the prototype. Because the link between the instance and the prototype is simply a pointer, not a copy, the search finds the new sayHi property on the prototype and returns the function stored there.
