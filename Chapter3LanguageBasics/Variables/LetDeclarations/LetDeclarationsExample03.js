var name = 'Nicholas';
console.log(name);  // 'Nicholas'
if (true) {
  var name = 'Matt';
  console.log(name);  // 'Matt'
}
// change to name variable is visible outside of the if block.
console.log(name);  /// 'Matt'

let age = 30;
console.log(age);  // 30
if (true) {
  let age = 26;
  console.log(age);  // 26
}
// change to age variable is NOT visible outside of the if block.
console.log(age);  // 30
