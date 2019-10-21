function makeKing(name = 'Henry', numerals = 'VIII') {
  return `King ${name} ${numerals}`;
}

console.log(makeKing());                 // 'King Henry VIII' 
console.log(makeKing('Louis'));          // 'King Louis VIII'
console.log(makeKing(undefined, 'VI'));  // 'King Henry VI'
