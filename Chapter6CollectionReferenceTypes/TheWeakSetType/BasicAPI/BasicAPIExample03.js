const ws = new WeakSet();

const val1 = {id: 1},
      val2 = {id: 2};

alert(ws.has(val1));  // false

ws.add(val1)
  .add(val2);

alert(ws.has(val1));  // true
alert(ws.has(val2));  // true

ws.delete(val1);  // deletes only this value

alert(ws.has(val1));  // false 
alert(ws.has(val2));  // true 
