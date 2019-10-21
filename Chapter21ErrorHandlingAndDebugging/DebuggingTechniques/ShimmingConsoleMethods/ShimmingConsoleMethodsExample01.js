// Join all arguments into string and alert the result
console.log = function() {
  // 'arguments' does not have a join method, first convert arguments to array
  const args = Array.prototype.slice.call(arguments);
  console.log(args.join(', '));
}
