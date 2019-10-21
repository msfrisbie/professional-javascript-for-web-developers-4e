const worker = new Worker('./worker.js'); 

// importing scripts
// scriptA executes
// scriptB executes
// scripts imported

scriptA.js
console.log('scriptA executes');

scriptB.js
console.log('scriptB executes');

worker.js
console.log('importing scripts');

importScripts('./scriptA.js');
importScripts('./scriptB.js');

console.log('scripts imported');
