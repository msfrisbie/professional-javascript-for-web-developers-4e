let biped = {
  numLegs: 2
};
let person = {
  name: 'Matt'
};

Object.setPrototypeOf(person, biped);

console.log(person.name);                              // Matt
console.log(person.numLegs);                           // 2
console.log(Object.getPrototypeOf(person) === biped);  // true
