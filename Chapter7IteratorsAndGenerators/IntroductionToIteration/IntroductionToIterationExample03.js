let collection = ['foo', 'bar', 'baz'];

collection.forEach((item) => console.log(item));
// foo
// bar
// baz
This solves the problem of separately tracking an index and retrieving items via the array object. However, there is no way to terminate this iteration, the method is limited to arrays, and the callback structure is unwieldy.
