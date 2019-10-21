let getQueryStringArgs = function() {
  // get query string without the initial '?'
  let qs = (location.search.length > 0 ? location.search.substring(1) : ""),
      // object to hold data
      args = {};
  
  // assign each item onto the args object
  for (let item of qs.split("&").map(kv => kv.split("="))) {
    let name = decodeURIComponent(item[0]),
      value = decodeURIComponent(item[1]);
    if (name.length) {
      args[name] = value;
    }
  }
  
  return args;
}
