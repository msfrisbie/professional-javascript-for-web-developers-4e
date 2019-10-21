// getCurrentPosition() callback is invoked with Position object as only argument
let p;
navigator.geolocation.getCurrentPosition((position) => p = position);
