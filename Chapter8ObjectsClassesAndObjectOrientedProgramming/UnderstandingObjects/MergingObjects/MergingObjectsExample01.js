let dest, src, result;

/**
 * Simple copy
 */
dest = {};
src = { id: 'src' };

result = Object.assign(dest, src);

// Object.assign mutates the destination object
// and also returns that object after exiting.
console.log(dest === result);  // true
console.log(dest !== src);     // true
console.log(result);           // { id: src }
console.log(dest);             // { id: src }


/**
 * Multiple source objects
 */
dest = {};

result = Object.assign(dest, { a: 'foo' }, { b: 'bar' });

console.log(result);  // { a: foo, b: bar }


/**
 * Getters and setters
 */
dest = {
  set a(val) {
    console.log(`Invoked dest setter with param ${val}`);
  }
};
src = {
  get a() {
    console.log('Invoked src getter');
    return 'foo';
  }
};

Object.assign(dest, src);
// Invoked src getter
// Invoked dest setter with param foo

// Since the setter does not perform an assignment,
// no value is actually transferred
console.log(dest);  // { set a(val) {...} }
ObjectAssignExample01.js
