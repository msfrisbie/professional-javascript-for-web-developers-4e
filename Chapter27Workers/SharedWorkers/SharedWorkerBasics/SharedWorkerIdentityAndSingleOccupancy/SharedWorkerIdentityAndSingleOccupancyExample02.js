// Instantiates single shared worker
//  - Constructors called all on same origin
//  - All scripts resolve to same URL
//  - All workers have same name
new SharedWorker('./sharedWorker.js');
new SharedWorker('sharedWorker.js');
new SharedWorker('https://www.example.com/sharedWorker.js'); 
