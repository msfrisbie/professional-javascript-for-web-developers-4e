// AVOID! Not specific enough
let isFirefox = !!(navigator.vendor && navigator.vendorSub);
           
// AVOID! Makes too many assumptions
let isIE = !!(document.all && document.uniqueID);
