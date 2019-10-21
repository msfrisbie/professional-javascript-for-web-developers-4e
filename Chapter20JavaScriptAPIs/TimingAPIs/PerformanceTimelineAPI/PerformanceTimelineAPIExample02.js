const entry = performance.getEntries()[0];

console.log(entry.name);       // 'https://foo.com'
console.log(entry.entryType);  // navigation
console.log(entry.startTime);  // 0
console.log(entry.duration);   // 182.36500001512468
