let arrowSum = (a, b) => {
  return a + b;
};

let functionExpressionSum = function(a, b) {
  return a + b;
};

console.log(arrowSum(5, 8));  // 13 
console.log(functionExpressionSum(5, 8));  // 13 
