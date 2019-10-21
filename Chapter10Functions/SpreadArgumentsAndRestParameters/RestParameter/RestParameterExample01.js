function getSum(...values) {
  // Sequentially sum all elements in 'values'
  // Initial total = 0
  return values.reduce((x, y) => x + y, 0);
}

console.log(getSum(1,2,3));  // 6
