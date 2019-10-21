// moduleA definition
load('moduleB').then(function(moduleB) {
  moduleB.doStuff();
}); 
