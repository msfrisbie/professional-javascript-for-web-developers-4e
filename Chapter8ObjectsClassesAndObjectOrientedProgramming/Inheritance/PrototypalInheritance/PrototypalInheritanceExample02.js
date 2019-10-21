let person = {
  name: "Nicholas",
  friends: ["Shelby", "Court", "Van"]
};
           
let anotherPerson = Object.create(person);
anotherPerson.name = "Greg";
anotherPerson.friends.push("Rob");
           
let yetAnotherPerson = Object.create(person);
yetAnotherPerson.name = "Linda";
yetAnotherPerson.friends.push("Barbie");
           
console.log(person.friends);   // "Shelby,Court,Van,Rob,Barbie"
PrototypalInheritanceExample02.js
