let dest, src, result;

/**
 * Overwritten properties
 */
dest = { id: 'dest' };

result = Object.assign(dest, { id: 'src1', a: 'foo' }, { id: 'src2', b: 'bar' });

// Object.assign will overwrite duplicate properties.
console.log(result);  // { id: src2, a: foo, b: bar }

// This can be observed by using a setter on the destination object:
dest = {
  set id(x) {
    console.log(x);
  }
};

Object.assign(dest, { id: 'first' }, { id: 'second' }, { id: 'third' });
// first
// second
// third


/**
 * Object references
 */
 
dest = {};
src = { a: {} };

Object.assign(dest, src);

// Shallow property copies means only object references copied.
console.log(dest);              // { a :{} }
console.log(dest.a === src.a);  // true 
ObjectAssignExample02.js
