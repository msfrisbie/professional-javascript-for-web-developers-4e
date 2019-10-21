let trueFactorial = factorial;
                   
factorial = function() {
  return 0;
};
                   
console.log(trueFactorial(5));  // 120
console.log(factorial(5));      // 0
