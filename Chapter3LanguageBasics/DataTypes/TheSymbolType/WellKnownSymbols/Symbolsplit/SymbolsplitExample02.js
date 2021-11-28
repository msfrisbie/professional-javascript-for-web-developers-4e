class FooSplitter {
  static [Symbol.split](target) {
    return target.split("foo");
  }
}

console.log("barfoobaz".split(FooSplitter));
// ["bar", "baz"]

class StringSplitter {
  constructor(str) {
    this.str = str;
  }

  [Symbol.split](target) {
    return target.split(this.str);
  }
}

console.log("barfoobaz".split(new StringSplitter("foo")));
// ["bar", "baz"]