function createCORSRequest(method, url) {
  let xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    xhr = null;
  }
  return xhr;
}
let request = createCORSRequest("get", "http:// www.somewhere-else.com/page/");
if (request) {
  request.onload = function() {
    // do something with request.responseText
  };
  request.send();
} 
XHRCrossBrowserCORSExample01.js
