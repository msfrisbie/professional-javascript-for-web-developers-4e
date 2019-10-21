// assume query string of ?q=javascript&num=10
           
let args = getQueryStringArgs();
           
alert(args["q"]);    // "javascript"
alert(args["num"]);  // "10"
