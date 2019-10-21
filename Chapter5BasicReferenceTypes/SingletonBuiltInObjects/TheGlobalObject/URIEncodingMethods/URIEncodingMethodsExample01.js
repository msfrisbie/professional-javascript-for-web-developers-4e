let uri = "http:// www.wrox.com/illegal value.js#start";
         
// "http:// www.wrox.com/illegal%20value.js#start"
console.log(encodeURI(uri));
         
// "http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.js%23start"
console.log(encodeURIComponent(uri));
