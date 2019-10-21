function setName(obj) {
  obj.name = "Nicholas";
}
           
let person = new Object();
setName(person);
console.log(person.name);  // "Nicholas"
