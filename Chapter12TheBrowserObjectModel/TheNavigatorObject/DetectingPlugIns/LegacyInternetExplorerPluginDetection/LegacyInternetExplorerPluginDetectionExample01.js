// plugin detection for legacy Internet Explorer
function hasIEPlugin(name) {
  try {
    new ActiveXObject(name);
    return true;
  } catch (ex) {
    return false;
  }
}
           
// detect flash
alert(hasIEPlugin("ShockwaveFlash.ShockwaveFlash"));
           
// detect quicktime
alert(hasIEPlugin("QuickTime.QuickTime"));
