
let outer = function() {
  let name = 'Jake';
  return function() {
    return name;
  };
};
