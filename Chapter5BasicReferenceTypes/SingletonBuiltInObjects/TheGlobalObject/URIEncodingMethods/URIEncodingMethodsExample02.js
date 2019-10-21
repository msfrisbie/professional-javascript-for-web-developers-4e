let uri = "http%3A%2F%2Fwww.wrox.com%2Fillegal%20value.js%23start";
         
// http%3A%2F%2Fwww.wrox.com%2Fillegal value.js%23start
console.log(decodeURI(uri));
         
// http:// www.wrox.com/illegal value.js#start
console.log(decodeURIComponent(uri));
