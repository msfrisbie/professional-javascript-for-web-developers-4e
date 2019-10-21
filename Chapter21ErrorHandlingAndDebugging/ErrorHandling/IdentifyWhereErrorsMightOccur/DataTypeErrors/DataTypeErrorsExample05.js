// still unsafe, non-array values cause an error
function reverseSort(values) {
  if (typeof values.sort === "function") {  // avoid!!!
    values.sort();
    values.reverse();
  }
}
