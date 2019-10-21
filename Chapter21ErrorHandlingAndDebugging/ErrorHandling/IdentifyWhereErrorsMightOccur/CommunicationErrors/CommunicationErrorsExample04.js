const url = "http://www.somedomain.com";
const newUrl = addQueryStringArg(url, "redir", 
                                 "http://www.someotherdomain.com?a=b&c=d");
console.log(newUrl);
