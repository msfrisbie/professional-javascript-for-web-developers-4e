"use strict";

// Optimization used: argument computation occurrs before stack frame is discarded
function outerFunction(a, b) {
  return innerFunction(a + b);
}

// Optimization used: initial return values do not have stack frame implications
function outerFunction(a, b) {
  if (a < b) {
    return a;
  }
  return innerFunction(a + b);
}

// Optimization used: both inner functions are considered to be in a tail position
function outerFunction(condition) {
  return condition ? innerFunctionA() : innerFunctionB();
}
