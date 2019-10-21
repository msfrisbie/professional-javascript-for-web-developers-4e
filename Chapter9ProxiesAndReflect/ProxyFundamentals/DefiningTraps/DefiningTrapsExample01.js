const target = {
  foo: 'bar'
};

const handler = {
  // Traps are keyed by method name inside the handler object
  get() {
    return 'handler override';
  }
};

const proxy = new Proxy(target, handler); 
ProxyTrapExample01.js
