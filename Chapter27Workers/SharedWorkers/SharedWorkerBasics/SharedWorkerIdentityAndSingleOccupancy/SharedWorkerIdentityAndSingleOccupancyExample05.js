// Instantiates two shared workers
//  - Constructors called all on same origin
//  - '?' token differentiates URLs
//  - All workers have same name
new SharedWorker('./sharedWorker.js'); 
new SharedWorker('./sharedWorker.js?'); 
