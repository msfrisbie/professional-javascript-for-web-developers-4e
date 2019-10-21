function addTen(num) {
  num += 10;
  return num;
}
           
let count = 20;
let result = addTen(count);
console.log(count);   // 20 - no change
console.log(result);  // 30
