let anotherFactorial = factorial;
factorial = null;
console.log(anotherFactorial(4));  // error!
