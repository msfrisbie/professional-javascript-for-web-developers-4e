fetch('/permanent-redirect')
  .then((response) => {
    // Default behavior is to follow the redirects until reaching a terminal URL.
    // This example would incur at least two round trip network requests:
    // <origin url>/permanent-redirect -> <redirect url>
    console.log(response.status);      // 200
    console.log(response.statusText);  // OK
    console.log(response.redirected);  // true
  });
FetchExample08.js
