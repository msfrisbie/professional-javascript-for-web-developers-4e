function addQueryStringArg(url, name, value) {
  if (url.indexOf("?") == -1){
    url += "?";
  } else {
    url += "&";
  }
    
  url += `${encodeURIComponent(name)=${encodeURIComponent(value)}`;
  return url;
}
