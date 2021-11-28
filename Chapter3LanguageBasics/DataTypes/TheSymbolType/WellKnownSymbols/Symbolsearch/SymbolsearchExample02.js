class FooSearcher {
  static [Symbol.search](target) {
    return target.indexOf("foo");
  }
}

console.log("foobar".search(FooSearcher)); // 0
console.log("barfoo".search(FooSearcher)); // 3
console.log("barbaz".search(FooSearcher)); // -1

class StringSearcher {
  constructor(str) {
    this.str = str;
  }

  [Symbol.search](target) {
    return target.indexOf(this.str);
  }
}

console.log("foobar".search(new StringSearcher("foo"))); // 0
console.log("barfoo".search(new StringSearcher("foo"))); // 3
console.log("barbaz".search(new StringSearcher("qux"))); // -1
