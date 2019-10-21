let r = new Response('foobar');
r.clone();  
// No error

r.text();  // sets the bodyUsed field to false

r.clone();  
// TypeError: Failed to execute 'clone' on 'Response': Response body is already used
CloningResponseObjectExample02.js
Only a body read can be performed with a Response that has a body. (Responses that do not include a body are not subject to this restriction.) This is demonstrated here:
let r = new Response('foobar');

r.text().then(console.log);  // foobar 

r.text().then(console.log);
// TypeError: Failed to execute 'text' on 'Response': body stream is locked
CloningResponseObjectExample03.js
In order to read the body multiple times with the same Response object that includes a body, clone() must be invoked prior to performing the first read:
let r = new Response('foobar');

r.clone().text().then(console.log);  // foobar 
r.clone().text().then(console.log);  // foobar
r.text().then(console.log);          // foobar
CloningResponseObjectExample04.js
