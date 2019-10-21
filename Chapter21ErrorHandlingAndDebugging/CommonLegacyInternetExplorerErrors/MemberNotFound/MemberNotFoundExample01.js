document.onclick = function() {
  var event = window.event;
  setTimeout(function(){
    event.returnValue = false;  // member not found error
  }, 1000);
}; 
