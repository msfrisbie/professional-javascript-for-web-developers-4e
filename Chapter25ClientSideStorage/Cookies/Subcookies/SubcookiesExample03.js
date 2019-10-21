// assume document.cookie=data=name=Nicholas&book=Professional%20JavaScript
                   
// get all subcookies
let data = SubCookieUtil.getAll("data");
alert(data.name);  // "Nicholas"
alert(data.book);  // "Professional JavaScript"
                   
// get subcookies individually
alert(SubCookieUtil.get("data", "name"));  // "Nicholas"
alert(SubCookieUtil.get("data", "book"));  // "Professional JavaScript"
