let person = {
  name: "Nicholas",
  friends: ["Shelby", "Court", "Van"]
};
           
let anotherPerson = Object.create(person, {
  name: {
    value: "Greg"
  }
});
console.log(anotherPerson.name);  // "Greg"         
PrototypalInheritanceExample03.js
