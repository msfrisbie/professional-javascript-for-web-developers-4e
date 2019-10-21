// Access a property
// Non-strict mode: Accesses the global property
// Strict mode: Throws an error because this is null
let color = "red";
function displayColor() {
  alert(this.color);
}
displayColor.call(null);
