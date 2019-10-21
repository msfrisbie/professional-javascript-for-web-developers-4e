const m = new Map();

const objKey = {}, 
      objVal = {},
      arrKey = [],
      arrVal = [];

m.set(objKey, objVal);
m.set(arrKey, arrVal);

objKey.foo = "foo";
objVal.bar = "bar";
arrKey.push("foo");
arrVal.push("bar");

alert(m.get(objKey));  // {bar: "bar"}
alert(m.get(arrKey));  // ["bar"] 
