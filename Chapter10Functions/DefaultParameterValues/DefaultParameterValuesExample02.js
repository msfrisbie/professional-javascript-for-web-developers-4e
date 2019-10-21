function makeKing(name = 'Henry') {
  return `King ${name} VIII`;
}

console.log(makeKing('Louis'));  // 'King Louis VIII'
console.log(makeKing());         // 'King Henry VIII'
