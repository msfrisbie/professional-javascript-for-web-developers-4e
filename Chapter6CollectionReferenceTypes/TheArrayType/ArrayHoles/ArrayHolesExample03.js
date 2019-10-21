const options = [1,,,,5];

// map() will skip the holes entirely
alert(options.map(() => 6));  // [6, undefined, undefined, undefined, 6]

// join() treats holes as empty strings
alert(options.join('-'));     // "1----5" 
