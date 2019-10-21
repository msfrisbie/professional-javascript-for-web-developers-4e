const o1 = {};
o1 = {};  // TypeError: Assignment to a constant variable;

const o2 = {};
o2.name = 'Jake';
console.log(o2.name);  // 'Jake'
