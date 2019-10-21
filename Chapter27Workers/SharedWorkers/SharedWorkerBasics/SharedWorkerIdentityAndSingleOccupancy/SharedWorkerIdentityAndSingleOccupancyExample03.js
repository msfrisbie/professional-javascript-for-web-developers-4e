// Instantiates two shared workers
//  - Constructors called all on same origin
//  - All scripts resolve to same URL
//  - One shared worker has name 'foo', one has name 'bar'
new SharedWorker('./sharedWorker.js', {name: 'foo'});
new SharedWorker('./sharedWorker.js', {name: 'foo'});
new SharedWorker('./sharedWorker.js', {name: 'bar'});
