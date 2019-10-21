function makeKing(name) {
  name = (typeof name !== 'undefined') ? name : 'Henry';
  return `King ${name} VIII`;
}

console.log(makeKing());         // 'King Henry VIII'
console.log(makeKing('Louis'));  // 'King Louis VIII'
