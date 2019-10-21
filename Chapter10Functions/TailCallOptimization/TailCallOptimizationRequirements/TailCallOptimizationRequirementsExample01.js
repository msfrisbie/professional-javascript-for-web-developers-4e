"use strict";

// No optimization: tail call is not returned
function outerFunction() {
  innerFunction();
}

// No optimization: tail call is not directly returned
function outerFunction() {
  let innerFunctionResult = innerFunction();
  return innerFunctionResult;
}

// No optimization: tail call must be cast as a string after return
function outerFunction() {
  return innerFunction().toString();
}

// No optimization: tail call is a closure
function outerFunction() {
  let foo = 'bar';
  function innerFunction() { return foo; }

  return innerFunction();
}
