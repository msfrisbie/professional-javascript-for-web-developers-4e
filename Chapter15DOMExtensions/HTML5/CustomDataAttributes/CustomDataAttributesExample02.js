// Methods used in this example are for illustrative purposes only
                   
let div = document.getElementById("myDiv");
                   
// Get the values
let appId = div.dataset.appId;
let myName = div.dataset.myname;
                   
// Set the value
div.dataset.appId = 23456;
div.dataset.myname = "Michael";
                   
// Is there a "myname" value?
if (div.dataset.myname){
  alert(`Hello, ${div.dataset.myname}`);
}
