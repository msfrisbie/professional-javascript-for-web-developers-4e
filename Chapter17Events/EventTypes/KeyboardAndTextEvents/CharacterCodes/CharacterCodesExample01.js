var EventUtil = {
      
  // more code here
  
  getCharCode: function(event) {
    if (typeof event.charCode == "number") {
      return event.charCode;
    } else {
      return event.keyCode;
    }
  },
  
  // more code here
};
