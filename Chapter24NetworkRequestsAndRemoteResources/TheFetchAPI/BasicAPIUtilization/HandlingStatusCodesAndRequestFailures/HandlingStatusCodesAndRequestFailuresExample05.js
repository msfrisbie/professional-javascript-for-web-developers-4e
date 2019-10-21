fetch('/bar')
  .then((response) => {
    console.log(response.status);  // 200
    console.log(response.ok);      // true
  });
fetch('/does-not-exist')
  .then((response) => {
    console.log(response.status);  // 404
    console.log(response.ok);      // false
  });
FetchExample09.js
