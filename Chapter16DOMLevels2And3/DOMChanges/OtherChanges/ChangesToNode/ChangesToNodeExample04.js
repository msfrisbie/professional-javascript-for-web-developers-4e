let div = document.createElement("div");
div.setUserData("name", "Nicholas", function(operation, key, value, src, dest) {
  if (operation == 1) {
    dest.setUserData(key, value, function() {});  }
});
           
let newDiv = div.cloneNode(true);
console.log(newDiv.getUserData("name"));  // "Nicholas"
