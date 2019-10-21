// unsafe function, non-array values cause an error
function reverseSort(values) {
  if (values) {  // avoid!!!
    values.sort();
    values.reverse();
  }
}
