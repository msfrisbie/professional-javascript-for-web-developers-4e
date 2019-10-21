let person = {
  name: 'Matt',
  age: 27,
  job: {
    title: 'Software engineer'
  }
};
let personCopy = {}; 


({ 
  name: personCopy.name, 
  age: personCopy.age,
  job: personCopy.job
} = person);

// Because an object reference was assigned into personCopy, changing a property
// inside the person.job object will be propagated to personCopy:
person.job.title = 'Hacker'

console.log(person);      
// { name: 'Matt', age: 27, job: { title: 'Hacker' } }

console.log(personCopy);  
// { name: 'Matt', age: 27, job: { title: 'Hacker' } }
NestedDestructuringExample01.js
