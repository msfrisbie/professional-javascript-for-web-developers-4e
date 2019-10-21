console.log(getSum(-1, ...values));         // 9
console.log(getSum(...values, 5));          // 15
console.log(getSum(-1, ...values, 5));      // 14
console.log(getSum(...values, ...[5,6,7])); // 28
