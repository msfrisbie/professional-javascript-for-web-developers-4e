// Refactored code

const o = {};

if(Object.defineProperty(o, 'foo', 'bar')) {
  console.log('success');
} else {
  console.log('failure');
}
