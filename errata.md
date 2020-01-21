# Professional JavaScript for Web Developers Errata
### Last updated: Jan 21, 2010

## Page 33

The text demonstrates an example of conditional variable declaration using the wrong equality operator. The example should be as follows:

```
if (typeof name === 'undefined') {
  let name;
}
```

## Page 43

The text states:

> In ECMAScript, dividing a number by 0 returns `NaN`, which allows other processing to continue.

This is not correct. Only combinations of `0`. `+0`, and `-0` will return `NaN`:

```
console.log(0/0);    // NaN
console.log(-0/+0);  // NaN
```

Nonzero values in the numerator with any signed or unsigned zero in the denominator will return `Infinity` or `-Infinity`:
```
console.log(5/0);   // Infinity
console.log(5/-0);  // -Infinity
```

## Page 55

The text demonstrates using the typeof operator with a global symbol. The `console.log` output is incorrect. The example should be as follows:

```
let fooGlobalSymbol = Symbol.for('foo');
console.log(typeof fooGlobalSymbol);  // symbol
```

## Page 56

The text demonstrates symbol logging inside objects. The `console.log` output uses some curly braces where parentheses should be. The example should be as follows:

```
let s1 = Symbol('foo'),
  s2 = Symbol('bar'),
  s3 = Symbol('baz'),
  s4 = Symbol('qux');
  
let o = {
 [s1]: 'foo val'
};
// Also valid:  o[s1] = 'foo val';

console.log(o);
// {Symbol(foo): foo val}

Object.defineProperty(o, s2, {value: 'bar val'});

console.log(o);
// {Symbol(foo): foo val, Symbol(bar): bar val}

Object.defineProperties(o, {
 [s3]: {value: 'baz val'},
 [s4]: {value: 'qux val'}
});

console.log(o);
// {Symbol(foo): foo val, Symbol(bar): bar val, 
// Symbol(baz): baz val, Symbol(qux): qux val}
```

## Page 93

The text demonstrates a `for-of` loop with `in`. The example should be as follows:

```
for (const el of [2,4,6,8]) {
  document.write(el);
}
```

## Page 133

The text incorrectly states that regular expression literals will reuse a `RegExp` instance. Although the description indicates the following code will sometimes return false, it returns `true` 10 times:

```
let re = null;
for (let i = 0; i < 10; i++) {
  re = /cat/g;
  re.test("catastrophe");
}
```

The ECMAScript 3 spec (published in 1999) states the following in section 7.8.5:

> A regular expression literal is an input element that is converted to a RegExp object (section 15.10) **when it is scanned.**

If this was the case, the code would evaluate correctly. However, fast forward to the ECMAScript 5.1 spec (published in 2011) in section 7.8.5:

> A regular expression literal is an input element that is converted to a RegExp object (see 15.10) **each time the literal is evaluated.**

As such, this code snippet used to be correct, but is no longer. The paragraph below the incorrect code snippet reads:

> ECMAScript regular-expression literals create new instances of RegExp as if the RegExp constructor were called directly.

This statement is correct.





