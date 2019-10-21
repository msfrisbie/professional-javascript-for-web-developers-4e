// set cookies
CookieUtil.set("name", "Nicholas");
CookieUtil.set("book", "Professional JavaScript");
                   
// read the values
alert(CookieUtil.get("name"));  // "Nicholas"
alert(CookieUtil.get("book"));  // "Professional JavaScript"
                   
// remove the cookies
CookieUtil.unset("name");
CookieUtil.unset("book");
                   
// set a cookie with path, domain, and expiration date
CookieUtil.set("name", "Nicholas", "/books/projs/", "www.wrox.com",
               new Date("January 1, 2010"));
                   
// delete that same cookie
CookieUtil.unset("name", "/books/projs/", "www.wrox.com");
                   
// set a secure cookie
CookieUtil.set("name", "Nicholas", null, null, null, true);
