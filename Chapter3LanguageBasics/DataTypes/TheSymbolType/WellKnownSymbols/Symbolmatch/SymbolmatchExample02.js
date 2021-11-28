class FooMatcher {
  static [Symbol.match](target) {
    return target.includes("foo");
  }
}

console.log("foobar".match(FooMatcher)); // true
console.log("barbaz".match(FooMatcher)); // false

class StringMatcher {
  constructor(str) {
    this.str = str;
  }

  [Symbol.match](target) {
    return target.includes(this.str);
  }
}

console.log("foobar".match(new StringMatcher("foo"))); // true
console.log("barbaz".match(new StringMatcher("qux"))); // false
