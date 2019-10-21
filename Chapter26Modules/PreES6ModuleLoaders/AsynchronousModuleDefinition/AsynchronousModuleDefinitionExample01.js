// Definition for a module with id 'moduleA'. moduleA depends on moduleB, 
// which will be loaded asynchronously.
define('moduleA', ['moduleB'], function(moduleB) {
  return {
    stuff: moduleB.doStuff();
  };
});
