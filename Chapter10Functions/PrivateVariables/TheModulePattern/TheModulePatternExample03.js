let application = function() { 
  // private variables and functions
  let components = new Array();
                   
  // initialization
  components.push(new BaseComponent());
                   
  // public interface
  return {
    getComponentCount() {
      return components.length;
    },
                   
    registerComponent(component) {
      if (typeof component == 'object') {
        components.push(component);
      }
    }
  };
}();
