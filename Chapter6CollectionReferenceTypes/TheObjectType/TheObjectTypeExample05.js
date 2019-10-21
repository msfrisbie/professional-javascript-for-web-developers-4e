function displayInfo(args) {
  let output = "";
           
  if (typeof args.name == "string"){
    output += "Name: " + args.name + "\n";
  }
           
  if (typeof args.age == "number") {
    output += "Age: " + args.age + "\n";
  }
           
  alert(output);
}
           
displayInfo({ 
  name: "Nicholas", 
  age: 29
});
           
displayInfo({
  name: "Greg"
});
