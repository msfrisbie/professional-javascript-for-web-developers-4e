const performanceResourceTimingEntry = performance.getEntriesByType('resource')[0];

console.log(performanceResourceTimingEntry);// PerformanceResourceTiming {
//   connectEnd: 138.11499997973442
//   connectStart: 138.11499997973442
//   decodedBodySize: 33808
//   domainLookupEnd: 138.11499997973442
//   domainLookupStart: 138.11499997973442
//   duration: 0
//   encodedBodySize: 33808
//   entryType: "resource"
//   fetchStart: 138.11499997973442
//   initiatorType: "link"
//   name: "https://static.foo.com/bar.png",
//   nextHopProtocol: "h2"
//   redirectEnd: 0
//   redirectStart: 0
//   requestStart: 138.11499997973442
//   responseEnd: 138.11499997973442
//   responseStart: 138.11499997973442
//   secureConnectionStart: 0
//   serverTiming: []
//   startTime: 138.11499997973442
//   transferSize: 0
//   workerStart: 0
// }

console.log(performanceResourceTimingEntry.responseEnd – 
            performanceResourceTimingEntry.requestStart);
// 493.9600000507198
