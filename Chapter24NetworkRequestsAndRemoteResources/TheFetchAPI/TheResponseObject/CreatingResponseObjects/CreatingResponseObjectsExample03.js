fetch('https://foo.com')
  .then((response) => {
    console.log(response);
  });

// Response {
//   body: (...)
//   bodyUsed: false
//   headers: Headers {}
//   ok: true
//   redirected: false
//   status: 200
//   statusText: "OK"
//   type: "basic"
//   url: "https://foo.com/"
// }
ResponseObjectExample03.js
The Response class also features two static methods for generating Response objects, Response.redirect() and Response.error(). Response.redirect() accepts a URL and redirect status code (301, 302, 303, 307, or 308) and returns a redirected Response object:
console.log(Response.redirect('https://foo.com', 301));
// Response {
//   body: (...)
//   bodyUsed: false
//   headers: Headers {}
//   ok: false
//   redirected: false
//   status: 301
//   statusText: ""
//   type: "default"
//   url: ""
// }
ResponseObjectExample04.js
