# Professional JavaScript for Web Developers Errata
### Last updated: June 13, 2020

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

## Page 380

The text should read:

> Here, a global variable called <b>identity</b> is created along with an object that also contains a property called <b>identity</b>. the object contains a method, <b>getIdentityFunc()</b>, ...

## Page 395

The final line of the example reads:

<pre>// Success: 12 (printed after roughly 1000ms)</pre>

It should read:

<pre>// Success: 12 (printed after roughly <b>2000ms</b>)</pre>

## Chapter 11 (Page 391-436)

As described in https://github.com/msfrisbie/professional-javascript-for-web-developers/issues/7, this chapter was written before the introduction of the microtask queue, which alters the execution behavior of some of the examples in this chapter. The async and promise syntax and APIs as demonstrated have not changed.

## Page 410

The text should read:

> The <b>synchronous/asynchronous</b> is demonstrated in the following example:

## Page 427

For the same reason as described in https://github.com/msfrisbie/professional-javascript-for-web-developers/issues/7, the print order of the example changes.

The text should read:

> ...where three function are invoked in order but their outputs print <b>out of order</b>;

The code example should be:

<pre><code>
...

foo();
bar();
baz()
<b>
// baz
// foo
// bar
</b>
</code></pre>

## Page 429

The demonstrated behavior in the example on this page changed with browser adoption of the microtask queue. See https://github.com/msfrisbie/professional-javascript-for-web-developers/issues/7 for details.

## Page 440

The text should read:

> In this way, a 12px font in <b><i>logical</i> pixels (or CSS pixels)</b> would really be a 36px font in <b><i>physical</i> pixels</b>.

## Page 441

The text should read:

> `window.scroll(x, y)` will scroll the viewport to an <b>absolute offset. (`window.scrollTo(x, y)` behaves identically). `window.scrollBy(x, y)` scrolls the viewport by a relative amount</b>.

## Page 453

The last line of the code example should read:

<pre><code><b>location</b>.port = 8080;</code></pre>

## Page 461

The text should read:

> For the first page lodaed in to a window or tab, `history.length` is equal to <b>1</b>.

In the code example:

<pre><code>
if (history.length === 1) {
  // this is the first page in the user's window
}
</code></pre>

## Page 522

The text assignment should not use quotes:

<pre><code>
var script = document.createElement("script");
var code = "function sayHi(){alert('hi');}"; 
try {
  script.appendChild(document.createTextNode(code));
} 
catch (ex){
  <b>script.text = code;</b>
}
document.body.appendChild(script);
</code></pre>

## Page 557

The text bullet should read:

> If an object argument is supplied, the user can specify how the scroll behaves. The `behavior` property specifies how the scroll should occur: `auto`, `instant`, or `smooth`. The `block` and `inline` properties specify how the element will be vertically aligned vertically and horizontally (respectively). These accept the values`start`, `center`, `end`, or `nearest`.

In the code, the `block` option should contain the `'start'`, not `true`.

<pre><code>
// Ensures this element is visible
document.forms[0].scrollIntoView();

// These behave identically
document.forms[0].scrollIntoView(true);
<b>document.forms[0].scrollIntoView({block: 'start'});</b>

// This attempts to scroll the element smoothly into view:
<b>document.forms[0].scrollIntoView({behavior: 'smooth', block: 'start'});</b>
</code></pre>

## Page 645

The examples uses `arguments.callee`, which is not available in arrow functions. For this to work, it should use a standard `function`:

<pre><code>
document.addEventListener("readystatechange", <b>function(event) {</b>
  if (
    document.readyState == "interactive" ||
    document.readyState == "complete"
  ) {
    document.removeEventListener("readystatechange", arguments.callee);
    console.log("Content loaded");
  }
});
</code></pre>

## Page 646

The second handler should have an `event` parameter:

<pre><code>
(function() {
  let showCount = 0;
  
  window.addEventListener("load", () => {
    console.log("Load fired");
  });
  
  window.addEventListener("pageshow", <b>(event) => {</b>
    showCount++;
    console.log(
      `Show has been fired ${showCount} times.`,
      `Persisted? ${event.persisted}`
    );
  });
})();
</code></pre>
