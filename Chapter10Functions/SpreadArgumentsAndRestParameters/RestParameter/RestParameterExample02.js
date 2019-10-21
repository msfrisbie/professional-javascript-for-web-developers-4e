// Error
function getProduct(...values, lastValue) {}

// OK
function ignoreFirst(firstValue, ...values) {
  console.log(values);
}

ignoreFirst();       // []
ignoreFirst(1);      // []
ignoreFirst(1,2);    // [2]
ignoreFirst(1,2,3);  // [2, 3]
