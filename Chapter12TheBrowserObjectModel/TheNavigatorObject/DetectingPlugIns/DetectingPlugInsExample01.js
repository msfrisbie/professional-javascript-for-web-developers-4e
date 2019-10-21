// plugin detection - doesn't work in Internet Explorer 10 or below
let hasPlugin = function(name) {
  name = name.toLowerCase();
  for (let plugin of window.navigator.plugins){
    if (plugin.name.toLowerCase().indexOf(name) > -1){
      return true;
    }
  }
           
  return false;
}
           
// detect flash
alert(hasPlugin("Flash"));
           
// detect quicktime
alert(hasPlugin("QuickTime"));
