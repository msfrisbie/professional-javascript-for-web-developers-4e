let age = 29;
let sayAge = () => alert(this.age);
           
alert(window.age);  // undefined
sayAge();           // undefined
window.sayAge();    // TypeError: window.sayAge is not a function
