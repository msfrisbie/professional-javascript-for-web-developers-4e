const target = {
  foo: 'bar'
};

const proxy = new Proxy(target, Reflect);

console.log(proxy.foo);   // bar
console.log(target.foo);  // bar 
ProxyReflectExample02.js
