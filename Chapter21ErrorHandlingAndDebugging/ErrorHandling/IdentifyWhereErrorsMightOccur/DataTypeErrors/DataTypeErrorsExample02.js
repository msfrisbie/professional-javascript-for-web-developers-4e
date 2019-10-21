function getQueryString(url) {
  if (typeof url === "string") {  // safer with type check
    let pos = url.indexOf("?");
    if (pos > -1) {
      return url.substring(pos +1);
    } 
  }
  return "";
} 
