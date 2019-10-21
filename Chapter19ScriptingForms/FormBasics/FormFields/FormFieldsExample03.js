let form = document.getElementById("myForm");
            
let colorFields = form.elements["color"];
console.log(colorFields.length);  // 3
            
let firstColorField = colorFields[0];
let firstFormField = form.elements[0];
console.log(firstColorField === firstFormField);   // true
