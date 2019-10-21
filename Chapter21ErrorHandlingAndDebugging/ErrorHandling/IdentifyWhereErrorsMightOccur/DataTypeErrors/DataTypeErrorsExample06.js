// safe, non-array values are ignored
function reverseSort(values) {
  if (values instanceof Array) {  // fixed
    values.sort();
    values.reverse();
  }
}
