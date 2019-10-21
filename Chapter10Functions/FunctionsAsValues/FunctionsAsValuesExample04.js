let data = [
  {name: "Zachary", age: 28}, 
  {name: "Nicholas", age: 29}
];
                   
data.sort(createComparisonFunction("name"));
console.log(data[0].name);  // Nicholas
                   
data.sort(createComparisonFunction("age"));
console.log(data[0].name);  // Zachary
