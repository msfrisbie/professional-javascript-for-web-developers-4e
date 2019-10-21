performance.mark('foo');

console.log(performance.getEntriesByType('mark')[0]);
// PerformanceMark {
//   name: "foo", 
//   entryType: "mark", 
//   startTime: 269.8800000362098, 
//   duration: 0
// }
