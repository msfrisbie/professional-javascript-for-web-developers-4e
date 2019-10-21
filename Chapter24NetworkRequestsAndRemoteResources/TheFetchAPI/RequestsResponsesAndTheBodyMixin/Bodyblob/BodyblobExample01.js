fetch('https://foo.com')
  .then((response) => response.blob())
  .then(console.log);

// Blob(...) {size:..., type: "..."} 
BodyBlobExample01.js
