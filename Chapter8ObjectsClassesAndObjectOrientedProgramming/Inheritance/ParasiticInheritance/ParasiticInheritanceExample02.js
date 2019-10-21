let person = {
  name: "Nicholas",
  friends: ["Shelby", "Court", "Van"]
};
           
let anotherPerson = createAnother(person);
anotherPerson.sayHi();  // "hi"
The code in this example returns a new object based on person. The anotherPerson object has all of the properties and methods of person but adds a new method called sayHi().
