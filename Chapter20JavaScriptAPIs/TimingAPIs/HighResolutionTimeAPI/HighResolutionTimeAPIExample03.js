const relativeTimestamp = performance.now();

const absoluteTimestamp = performance.timeOrigin + relativeTimestamp;

console.log(relativeTimestamp);  // 244.43500000052154
console.log(absoluteTimestamp);  // 1561926208892.4001
