let num = 0;
           
for (let i = 1; i < 10; i++) {
  if (i % 5 == 0) {
    continue;
  }
  num++;
}
           
console.log(num);  // 8
