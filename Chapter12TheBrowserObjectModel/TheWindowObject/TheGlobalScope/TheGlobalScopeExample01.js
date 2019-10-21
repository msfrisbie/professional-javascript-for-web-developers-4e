var age = 29;
var sayAge = () => alert(this.age);
           
alert(window.age);  // 29
sayAge();           // 29
window.sayAge();    // 29
