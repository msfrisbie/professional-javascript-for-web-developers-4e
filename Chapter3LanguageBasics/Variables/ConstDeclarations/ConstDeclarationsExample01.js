const age = 26;
age = 36;  // TypeError: assignment to a constant

// const still disallows redundant declaration
const name = 'Matt';
const name = 'Nicholas';  // SyntaxError

// const is still scoped to blocks
const name = 'Matt';
if (true) {
  const name = 'Nicholas';
}
console.log(name);  // Matt 
