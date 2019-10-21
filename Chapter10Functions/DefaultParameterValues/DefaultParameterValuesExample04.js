function makeKing(name = 'Henry') {
  name = 'Louis';
  return `King ${arguments[0]}`;
}

console.log(makeKing());         // 'King undefined' 
console.log(makeKing('Louis'));  // 'King Louis'
