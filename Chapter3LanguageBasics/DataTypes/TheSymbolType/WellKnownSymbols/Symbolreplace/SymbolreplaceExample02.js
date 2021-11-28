class FooReplacer {
  static [Symbol.replace](target, replacement) {
    return target.split("foo").join(replacement);
  }
}

console.log("barfoobaz".replace(FooReplacer, "qux"));
// "barquxbaz"

class StringReplacer {
  constructor(str) {
    this.str = str;
  }

  [Symbol.replace](target, replacement) {
    // console.log("barfoobaz".split("foo")); //[ 'bar', 'baz' ]
    return target.split(this.str).join(replacement);
  }
}

console.log("barfoobaz".replace(new StringReplacer("foo"), "qux"));
// "barquxbaz"
