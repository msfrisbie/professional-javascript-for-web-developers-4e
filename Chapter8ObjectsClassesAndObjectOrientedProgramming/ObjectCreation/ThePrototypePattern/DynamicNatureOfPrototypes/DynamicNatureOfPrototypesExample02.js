function Person() {}
           
let friend = new Person();
    
Person.prototype = {
  constructor: Person,
  name: "Nicholas",
  age: 29,
  job: "Software Engineer",
  sayName() {
    console.log(this.name);
  }
};
           
friend.sayName();   // error 
ObjectDynamicProtoypesExample01.js
In this example, a new instance of Person is created before the prototype object is overwritten. When friend.sayName() is called, it causes an error, because the prototype that friend points to doesn’t contain a property of that name. Figure 8-3 illustrates why this happens.
Figure 8-3[c06f003.tif]
