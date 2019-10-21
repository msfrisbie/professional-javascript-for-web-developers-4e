// still unsafe, non-array values cause an error
function reverseSort(values) {
  if (values != null){  // avoid!!!
    values.sort();
    values.reverse();
  }
}
