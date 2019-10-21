fetch('/throw-server-error')
  .then((response) => {
    console.log(response.status);      // 500
    console.log(response.statusText);  // Internal Server Error
  }); 
FetchExample07.js
