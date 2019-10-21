function sum(num1, num2) {
  return num1 + num2;
}
 
console.log(sum(10, 10));         // 20
                   
let anotherSum = sum;        
console.log(anotherSum(10, 10));  // 20
                   
sum = null;        
console.log(anotherSum(10, 10));  // 20
