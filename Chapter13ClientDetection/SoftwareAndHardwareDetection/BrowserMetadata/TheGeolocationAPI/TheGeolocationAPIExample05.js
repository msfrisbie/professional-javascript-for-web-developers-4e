// Browsers will prompt the user to allow access to the Geolocation API.
// This example shows what occurs when the user denies access.
navigator.geolocation.getCurrentPosition(
  () => {}, 
  (e) => {
    console.log(e.code);     // 1
    console.log(e.message);  // User denied Geolocation
  }
);

// This example shows what occurs when executing in an insecure context.
navigator.geolocation.getCurrentPosition(
  () => {}, 
  (e) => {
    console.log(e.code);     // 1
    console.log(e.message);  // Only secure origins are allowed
  }
);
