const person = { name: 'Matt', age: 27, job: { title: 'Engineer', level: 10 } };

const { name, job: { title, ...remainingJobData }, ...remainingPersonData } = person;

console.log(name);                 // Matt
console.log(title);                // Engineer
console.log(remainingPersonData);  // { age: 27 }
console.log(remainingJobData);     // { level: 10 } 

const { ...a, job } = person;
// SyntaxError: Rest element must be last element
