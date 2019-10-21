let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
           
let everyResult = numbers.every((item, index, array) => item > 2);
alert(everyResult);  // false
           
let someResult = numbers.some((item, index, array) => item > 2);           
alert(someResult);   // true
