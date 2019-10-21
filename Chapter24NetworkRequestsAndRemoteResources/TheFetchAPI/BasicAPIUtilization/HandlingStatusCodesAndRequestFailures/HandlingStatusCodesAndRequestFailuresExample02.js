fetch('/does-not-exist')
  .then((response) => {
    console.log(response.status);      // 404
    console.log(response.statusText);  // Not Found
  });
FetchExample06.js
