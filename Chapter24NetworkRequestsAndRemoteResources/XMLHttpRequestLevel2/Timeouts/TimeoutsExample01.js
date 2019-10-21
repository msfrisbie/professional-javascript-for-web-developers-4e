let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (xhr.readyState == 4) {
    try {
      if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
        alert(xhr.responseText);
      } else {
        alert("Request was unsuccessful: " + xhr.status);
      }
    } catch (ex) {
      // assume handled by ontimeout
    }
  }
};
           
           
xhr.open("get", "timeout.php", true);
xhr.timeout = 1000;  // set timeout for 1 second
xhr.ontimeout = function() {
  alert("Request did not return in a second.");
};
xhr.send(null); 
XHRTimeoutExample01.js
