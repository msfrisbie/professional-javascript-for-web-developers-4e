let person = {};
Object.defineProperty(person, "name", {
  writable: false,
  value: "Nicholas"
});
console.log(person.name);  // "Nicholas"
person.name = "Greg";
console.log(person.name);  // "Nicholas"
This example creates a property called name with a value of "Nicholas" that is read-only. The value of this property can’t be changed, and any attempts to assign a new value are ignored in nonstrict mode. In strict mode, an error is thrown when an attempt is made to change the value of a read-only property.
