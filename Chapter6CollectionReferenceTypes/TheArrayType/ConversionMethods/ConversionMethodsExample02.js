let person1 = {
  toLocaleString() {
    return "Nikolaos";
  },
  
  toString() {
    return "Nicholas";
  }
};
           
let person2 = {
  toLocaleString() {
    return "Grigorios";
  },
  
  toString() {
    return "Greg";
  }
};
           
let people = [person1, person2];
alert(people);                   // Nicholas,Greg
alert(people.toString());        // Nicholas,Greg
alert(people.toLocaleString());  // Nikolaos,Grigorios
