function handleResponse(response) {
  console.log(`
      You're at IP address ${response.ip}, which is in 
      ${response.city}, ${response.region_name}`);
}
let script = document.createElement("script");
script.src = "http://freegeoip.net/json/?callback=handleResponse";
document.body.insertBefore(script, document.body.firstChild); 
XHRJSONPExample01.js
