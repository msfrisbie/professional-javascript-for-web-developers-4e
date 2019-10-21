const m = new Map();

const a = 0/"",  // NaN
      b = 0/"",  // NaN
      pz = +0,
      nz = -0;

alert(a === b);    // false
alert(pz === nz);  // true

m.set(a, "foo");
m.set(pz, "bar");

alert(m.get(b));   // foo
alert(m.get(nz));  // bar

