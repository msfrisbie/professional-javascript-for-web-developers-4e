// unsafe function, any non-string value causes an error
function getQueryString(url) {
  const pos = url.indexOf("?");
  if (pos > -1){
    return url.substring(pos +1);
  }
  return "";
} 
