// Class expressions may be optionally named. When the expression is assigned to a variable, the name property may be used to retrieve the class expression name string, but the identifier itself is not accessible outside the class expression scope.

let Person = class PersonName {
  identify() {
    console.log(Person.name, PersonName.name);
  }
}

let p = new Person();

p.identify();              // PersonName, PersonName

console.log(Person.name);  // PersonName
console.dir(Person);  // [class PersonName]
console.log(PersonName);   // ReferenceError: PersonName is not defined