"use strict";

// base case
function fib(n) {
  return fibImpl(0, 1, n); 
}

// recursive case
function fibImpl(a, b, n) {
  if (n === 0) {
    return a;
  }
  return fibImpl(b, a + b, n - 1);
}
