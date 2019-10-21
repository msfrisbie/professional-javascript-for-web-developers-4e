function createPerson(name){
  let localPerson = new Object();
  localPerson.name = name;
  return localPerson;
}
           
let globalPerson = createPerson("Nicholas");
           
// do something with globalPerson
           
globalPerson = null;
