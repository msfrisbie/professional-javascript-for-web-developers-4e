function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}
The object() function creates a temporary constructor, assigns a given object as the constructor’s prototype, and returns a new instance of the temporary type. Essentially, object() performs a shadow copy of any object that is passed into it. Consider the following:
let person = {
  name: "Nicholas",
  friends: ["Shelby", "Court", "Van"]
};
           
let anotherPerson = object(person);
anotherPerson.name = "Greg";
anotherPerson.friends.push("Rob");
           
let yetAnotherPerson = object(person);
yetAnotherPerson.name = "Linda";
yetAnotherPerson.friends.push("Barbie");
           
console.log(person.friends);   // "Shelby,Court,Van,Rob,Barbie"
PrototypalInheritanceExample01.js
