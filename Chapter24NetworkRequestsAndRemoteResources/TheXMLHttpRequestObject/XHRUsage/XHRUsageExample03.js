xhr.open("get", "example.txt", false);
xhr.send(null);
           
if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
  alert(xhr.responseText);
} else {
  alert("Request was unsuccessful: " + xhr.status);
}
XHRExample01.js
