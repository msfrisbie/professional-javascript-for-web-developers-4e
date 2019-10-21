// AVOID! Incorrect capability detection – only checks for existence
function isSortable(object) {
  return !!object.sort;
}
