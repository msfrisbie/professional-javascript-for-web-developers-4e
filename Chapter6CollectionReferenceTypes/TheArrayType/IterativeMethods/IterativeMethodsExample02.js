let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
           
let filterResult = numbers.filter((item, index, array) => item > 2);           
alert(filterResult);   // [3,4,5,4,3]
