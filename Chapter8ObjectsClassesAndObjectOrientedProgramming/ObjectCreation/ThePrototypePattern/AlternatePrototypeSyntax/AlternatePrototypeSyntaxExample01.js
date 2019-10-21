function Person() {}
           
Person.prototype = {
  name: "Nicholas",
  age: 29,
  job: "Software Engineer",
  sayName() {
    console.log(this.name);
  }
}; 
ObjectPrototypeAlternateExample01.js
