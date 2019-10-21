// detect flash for all browsers
function hasFlash() {
  var result = hasPlugin("Flash");
  if (!result){
    result = hasIEPlugin("ShockwaveFlash.ShockwaveFlash");
  }
  return result;
}
           
// detect quicktime for all browsers
function hasQuickTime() {
  var result = hasPlugin("QuickTime");
  if (!result){
    result = hasIEPlugin("QuickTime.QuickTime");
  }
  return result;
}
           
// detect flash
alert(hasFlash());
           
// detect quicktime
alert(hasQuickTime());
