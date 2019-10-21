// assume document.cookie=data=name=Nicholas&book=Professional%20JavaScript
                   
// set two subcookies
SubCookieUtil.set("data", "name", "Nicholas");
SubCookieUtil.set("data", "book", "Professional JavaScript");
                   
// set all subcookies with expiration date
SubCookieUtil.setAll("data", { name: "Nicholas", book: "Professional JavaScript" },
    new Date("January 1, 2010"));
                   
// change the value of name and change expiration date for cookie
SubCookieUtil.set("data", "name", "Michael", new Date("February 1, 2010"));
