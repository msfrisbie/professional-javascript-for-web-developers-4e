// Class definitions also support getters and setter accessors. The syntax and behavior is identical to that of regular objects:
class Person {
  set name(newName) {
    this.name_ = newName;
  }

  get name() {
    return this.name_;
  }
}

let p = new Person();
p.name = 'Jake';
console.log(p.name);  // Jake 