var EventUtil = {
  addHandler: function(element, type, handler) {
    // code removed for printing
  },
  
  getEvent: function(event) {
    return event ? event : window.event;
  },
  
  getTarget: function(event) {
    return event.target || event.srcElement;
      
  },
  
  preventDefault: function(event) {
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false;
    }
  },
      
  removeHandler: function(element, type, handler) {
    // code removed for printing
  },
  
  stopPropagation: function(event) {
    if (event.stopPropagation) {
      event.stopPropagation();
    } else {
      event.cancelBubble = true;
    }
  }
      
};
