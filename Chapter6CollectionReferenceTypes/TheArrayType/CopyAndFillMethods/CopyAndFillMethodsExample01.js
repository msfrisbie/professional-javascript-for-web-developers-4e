const zeroes = [0, 0, 0, 0, 0];

// Fill the entire array with 5
zeroes.fill(5);
alert(zeroes);   // [5, 5, 5, 5, 5]
zeroes.fill(0);  // reset

// Fill all indices >=3 with 6
zeroes.fill(6, 3);
alert(zeroes);   // [0, 0, 0, 6, 6]
zeroes.fill(0);  // reset

// Fill all indices >= 1 and < 3 with 7
zeroes.fill(7, 1, 3);
alert(zeroes);   // [0, 7, 7, 0, 0]; 
zeroes.fill(0);  // reset

// Fill all indices >=1 and < 4 with 8
// (-4 + zeroes.length = 1)
// (-1 + zeroes.length = 4)
zeroes.fill(8, -4, -1);
alert(zeroes);   // [0, 8, 8, 8, 0];

