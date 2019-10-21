const wm = new WeakMap();

const key1 = {id: 1},
      key2 = {id: 2};

alert(wm.has(key1));  // false
alert(wm.get(key1));  // undefined

wm.set(key1, "Matt")
  .set(key2, "Frisbie");

alert(wm.has(key1));  // true
alert(wm.get(key1));  // Matt

wm.delete(key1);  // deletes only this key/value pair

alert(wm.has(key1));  // false 
alert(wm.has(key2));  // true 
