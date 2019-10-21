let form = document.getElementById("myForm");
let field = form.elements[0];
            
// change the value
field.value = "Another value";
            
// check the value of form
console.log(field.form === form);   // true
            
// set focus to the field
field.focus();
            
// disable the field
field.disabled = true;
            
// change the type of field (not recommended, but possible for <input>)
field.type = "checkbox";
