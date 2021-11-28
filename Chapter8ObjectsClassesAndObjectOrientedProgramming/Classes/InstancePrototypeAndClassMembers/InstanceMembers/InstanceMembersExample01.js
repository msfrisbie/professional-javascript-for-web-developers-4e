// Each instance is assigned unique member objects, meaning nothing is shared on the prototype:
class Person {
    constructor() {
      // For this example, define a string with object wrapper
      // as to check object equality between instances below
      this.name = new String('Jack');
      this.sayName = () => console.log(this.name);

    this.nicknames = ['Jake', 'J-Dog']
  }
}

let p1 = new Person(),
    p2 = new Person();

p1.sayName();  // Jack
p2.sayName();  // Jack

console.log(p1.name === p2.name);            // false
console.log(p1.sayName === p2.sayName);      // false
console.log(p1.nicknames === p2.nicknames);  // false

p1.name = p1.nicknames[0];
p2.name = p2.nicknames[1];

p1.sayName();  // Jake
p2.sayName();  // J-Dog