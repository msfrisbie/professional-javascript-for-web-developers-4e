const a1 = [1, 2, 3, 4];
const a2 = Array.from(a1, x => x**2); 
const a3 = Array.from(a1, function(x) {return x**this.exponent}, {exponent: 2});
alert(a2);  // [1, 4, 9, 16] 
alert(a3);  // [1, 4, 9, 16] 
