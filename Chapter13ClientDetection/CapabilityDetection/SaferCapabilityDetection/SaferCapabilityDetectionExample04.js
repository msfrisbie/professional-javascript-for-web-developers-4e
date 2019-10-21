 // doesn’t work properly in Internet Explorer <= 8
function hasCreateElement() {
  return typeof document.createElement == "function";
}
