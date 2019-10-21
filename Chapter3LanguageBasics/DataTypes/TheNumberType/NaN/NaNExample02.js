console.log(isNaN(NaN));     // true
console.log(isNaN(10));      // false - 10 is a number
console.log(isNaN("10"));    // false - can be converted to number 10
console.log(isNaN("blue"));  // true - cannot be converted to a number
console.log(isNaN(true));    // false - can be converted to number 1
