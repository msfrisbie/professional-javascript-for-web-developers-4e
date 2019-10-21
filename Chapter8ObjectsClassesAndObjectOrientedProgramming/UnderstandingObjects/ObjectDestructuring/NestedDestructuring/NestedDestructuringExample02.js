let person = {
  name: 'Matt',
  age: 27,
  job: {
    title: 'Software engineer'
  }
};

// Declares 'title' variable and assigns person.job.title as its value
let { job: { title }} = person;

console.log(title);  // Software engineer 
