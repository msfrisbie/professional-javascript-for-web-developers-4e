# Professional JavaScript for Web Developers Errata
### Last updated: Apr 7, 2020

**Please note: Wiley actively updates their print and electronic book copies to include these corrections.**

## Introduction

The text should read:

> Firefox has Gecko/**SpiderMonkey**

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

## Page 108

The text states:

> Neither the global context nor the local context of `swapColors()` has access to `tempColor`.

This should read:

> Neither the global context nor the local context of **`changeColors()`** has access to `tempColor`.


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


## Page 161

The text demonstrates an example of assigning variables to the global object. It should be as follows:

<pre><code>
<b>var</b> color = "red";

function sayColor() {
  console.log(window.color);
}

window.sayColor();  // red
</pre></code>

## Page 163

The text should say the following:

The `Math.random()` method returns a random number between 0 and 1, **including 0 but not including 1.**

## Page 178

The text states:

> `fill()` silenty ignores ranges that exceed the boundaries of the array,

It should state:

> `copyWithin()` silenty ignores ranges that exceed the boundaries of the array,

## Page 183

The text condenses a long-form sort into a sequence of ternary operators. It should read:

<pre><code>
let values = [0, 1, 5, 10, 15];
values.sort((a, b) => a < b ? <b>1 :</b> a > b ? -1 : 0);
alert(values);  // [15,10,5,1,0]
</pre></code>

## Page 202

The text should read:

> Unlike an `Object`, which can only use numbers, strings, **or Symbols** as keys, 

## Page 213

The collection types code example should read:

<pre><code>
const s = new Set();

const objVal = {},
      arrVal = [];
      
<b>s.add(objVal)
 .add(arrVal);</b>
 
 objVal.bar = "bar";
 arrVal.push("bar");
 
 alert(s.has(objVal));  // true
 alert(s.has(arrVal));  // true
</pre></code>

## Page 215

The code example should read:

<pre><code>
const s1 = new Set(["val1"]);

// String primitive as value is unaltered
for (let value of <b>s1</b>.values()) {
  value = "newVal";
  alert(value);          // newVal
  alert(<b>s1</b>.has("val1"));  // true
}

const valObj = {id: 1};

const s2 = new Set([valObj]);

// Value inside property is altered, but the object still exists
// inside the set
for (let value of <b>s2</b>.values()) {
  value.id = "newVal";
  alert(value);           // {id: "newVal"}
  alert(<b>s2</b>.has(valObj));  // true
}
alert(valObj);            // <b>{id: "newVal"}</b>
</pre></code>

## Page 242

The first code snippet instantiates an unused variable. It should read:

<pre><code>
function* range(start, end) {
  while(end > start) {
    yield start++;
  }
}

...
</code></pre>

## Page 276

The code snippet at the top of the page should read:

<pre><code>
console.log(person1 !== Person);            // true
console.log(person1 !== Person.prototype);  // true
console.log(Person.prototype !== <b>Person</b>);   // true
</code></pre>

## Page 313

The introductory paragraph to the super() section should read:

> Derived class methods have a reference to their prototype via the `super` keyword. <b>This is only available for derived classes inside the constructor, instance methods, and static methods.</b> `super` is used inside the constructor to control when to invoke the parent class constructor.

## Page 325

The hasOwnProperty() lines should return `true`. Also, the `instanceof` assertion inside the code snippet is not correct and should be removed. The snippet should read:

<pre><code>
// The hasOwnProperty() method is effectively applied
// to the target in both cases.
console.log(target.hasOwnProperty('id'));  <b>// true</b>
console.log(proxy.hasOwnProperty('id'));   <b>// true</b>

// Strict object equality can still be used to
...
</code></pre>

## Page 330

The final code snippet should use `Reflect.defineProperty`:

<pre><code>
// Refactored code

const o = {};

if(<b>Reflect.defineProperty</b>(o, 'foo', <b>{value: 'bar'}</b>)) {
  console.log('success');
} else {
  console.log('failure');
}
</code></pre>

## Page 337

The `getOwnPropertyDescriptior()` intercepted operations should be:

<pre><code>
Object.getOwnPropertyDescriptor(proxy, property)

Reflect.getOwnPropertyDescriptor(proxy, property)
</code></pre>

## Page 345

The "Property Validation" code example should read as follows:

<pre><code>
const target = {
  onlyNumbersGoHere: 0
};

const proxy = new Proxy(target, {
  set(target, property, value) {
    <b>if (typeof value !== 'number') {</b>
      return false;
    } else {
...
</code></pre>

## Page 395

The final line of the example reads:

<pre>// Success: 12 (printed after roughly 1000ms)</pre>

It should read:

<pre>// Success: 12 (printed after roughly <b>2000ms</b>)</pre>

## Page 429

The demonstrated behavior in the example on this page changed with browser adoption of the microtask queue. See https://github.com/msfrisbie/professional-javascript-for-web-developers/issues/7 for details.
