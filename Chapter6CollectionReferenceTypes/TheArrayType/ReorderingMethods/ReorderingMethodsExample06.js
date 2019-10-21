let values = [0, 1, 5, 10, 15];
values.sort((a, b) => a < b ? a > b ? -1 : 0);
alert(values);  // 15,10,5,1,0
