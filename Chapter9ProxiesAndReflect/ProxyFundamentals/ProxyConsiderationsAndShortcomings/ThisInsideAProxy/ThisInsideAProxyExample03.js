const user = new User(123);
console.log(user.id);  // 123

const userInstanceProxy = new Proxy(user, {});
console.log(userInstanceProxy.id);  // undefined
