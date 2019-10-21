Converting to numbers from various data types can get complicated, as indicated by the number of rules there are for Number(). Here are some concrete examples:let num1 = Number("Hello world!");  // NaN
let num2 = Number("");              // 0
let num3 = Number("000011");        // 11
let num4 = Number(true);            // 1
