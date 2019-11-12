# Professional JavaScript for Web Developers Errata
### Last updated: Nov 11, 2019

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





