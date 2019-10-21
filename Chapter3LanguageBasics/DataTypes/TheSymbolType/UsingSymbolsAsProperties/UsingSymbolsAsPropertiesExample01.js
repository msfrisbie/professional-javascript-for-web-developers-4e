let s1 = Symbol('foo'),
    s2 = Symbol('bar'),
    s3 = Symbol('baz'),
    s4 = Symbol('qux');
    
let o = {
  [s1]: 'foo val'
};
// Also valid:   o[s1] = 'foo val';

console.log(o);
// {Symbol{foo}: foo val}

Object.defineProperty(o, s2, {value: 'bar val'});

console.log(o);
// {Symbol{foo}: foo val, Symbol(bar): bar val}

Object.defineProperties(o, {
  [s3]: {value: 'baz val'},
  [s4]: {value: 'qux val'}
});

console.log(o);
// {Symbol{foo}: foo val, Symbol(bar): bar val, 
//  Symbol{baz}: baz val, Symbol(qux): qux val}
