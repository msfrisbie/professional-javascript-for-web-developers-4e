// One major departure from function constructors is that the use of the new operator with class constructors is mandatory. With function constructors, when electing not to use the new operator, the constructor would use the global this value—typically the window object—inside the constructor. With class constructors, neglecting to use the new operator will throw an error:
function Person() {}

class Animal {}

// Constructs instance using window as 'this'
let p = Person();

let a = Animal();
// TypeError: class constructor Animal cannot be invoked without 'new' 
