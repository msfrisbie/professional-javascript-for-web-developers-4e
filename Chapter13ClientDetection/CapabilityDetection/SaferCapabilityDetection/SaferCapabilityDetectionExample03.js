// Better – checks if sort is a function
function isSortable(object) {
  return typeof object.sort == "function";
}
The typeof operator is used in this code to determine that sort is actually a function and therefore can be called to sort the data contained within.
