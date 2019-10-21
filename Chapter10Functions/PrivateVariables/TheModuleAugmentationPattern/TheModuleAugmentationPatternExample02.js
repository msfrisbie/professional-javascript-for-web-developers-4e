let application = function() {
  // private variables and functions
  let components = new Array();
                   
  // initialization
  components.push(new BaseComponent());
                   
  // create a local copy of application
  let app = new BaseComponent();
                   
  // public interface
  app.getComponentCount = function() {
    return components.length;
  };
                   
  app.registerComponent = function(component) {
    if (typeof component == "object") {
      components.push(component);
    }
  };
                   
  // return it
  return app;
}();
