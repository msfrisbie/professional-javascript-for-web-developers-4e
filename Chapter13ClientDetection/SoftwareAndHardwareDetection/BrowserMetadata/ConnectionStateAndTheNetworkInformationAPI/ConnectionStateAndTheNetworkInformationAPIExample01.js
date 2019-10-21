const connectionStateChange = () => console.log(navigator.onLine);

window.addEventListener('online', connectionStateChange); 
window.addEventListener('offline', connectionStateChange);

// On device connect:
// true

// On device disconnect:
// false
