let xhr = new XMLHttpRequest();    
xhr.onload = function(event) {
  if ((xhr.status >= 200 && xhr.status < 300) || 
      xhr.status == 304) {
    alert(xhr.responseText);
  } else {
    alert("Request was unsuccessful: " + xhr.status);
  }
};
xhr.onprogress = function(event) {
  let divStatus = document.getElementById("status");
  if (event.lengthComputable) {
    divStatus.innerHTML = "Received " + event.position + " of " + 
      event.totalSize + 
" bytes";
  }
};
           
xhr.open("get", "altevents.php", true);
xhr.send(null); 
XHRProgressEventExample01.js
