let url = "example.php";
           
// add the arguments
url = addURLParam(url, "name", "Nicholas");
url = addURLParam(url, "book", "Professional JavaScript");
           
// initiate request
xhr.open("get", url, false); 
XHRGetExample02.js
