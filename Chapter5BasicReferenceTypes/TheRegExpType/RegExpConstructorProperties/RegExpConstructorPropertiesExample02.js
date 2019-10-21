let text = "this has been a short summer";
let pattern = /(.)hort/g;
         
/*
 * Note: Opera doesn't short property names.
 * Internet Explorer doesn't support multiline.
 */    
if (pattern.test(text)) {
  console.log(RegExp.$_);         // this has been a short summer
  console.log(RegExp["$`"]);      // this has been a      
  console.log(RegExp["$'"]);      // summer
  console.log(RegExp["$&"]);      // short
  console.log(RegExp["$+"]);      // s
  console.log(RegExp["$*"]);      // false
}
