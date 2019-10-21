let person = {
  name: 'Matt',
  age: 27
};

let { name, job='Software engineer' } = person;

console.log(name);  // Matt
console.log(job);   // Software engineer
