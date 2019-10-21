function selectFrom(lowerValue, upperValue) {
  let choices = upperValue - lowerValue + 1;
  return Math.floor(Math.random() * choices + lowerValue);
}
         
let num = selectFrom(2,10);
console.log(num);  // number between 2 and 10, inclusive
