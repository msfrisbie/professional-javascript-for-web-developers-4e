function sum(num1, num2) {
  return num1 + num2;
}
                   
function callSum1(num1, num2) {
  return sum.apply(this, arguments);  // passing in arguments object
}
                   
function callSum2(num1, num2) {
    return sum.apply(this, [num1, num2]);  // passing in array
}
                   
console.log(callSum1(10, 10));  // 20
console.log(callSum2(10, 10));  // 20
