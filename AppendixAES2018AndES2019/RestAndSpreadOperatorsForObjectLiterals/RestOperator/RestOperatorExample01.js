const person = { name: 'Matt', age: 27, job: 'Engineer' };
const { name, ...remainingData } = person;

console.log(name);  // Matt
console.log(remainingData);  // { age: 27, job: 'Engineer' }
