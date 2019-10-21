// ok
function foo(a, b, c) {
  "use strict";
}

// bad
function bar(a, b, c='d') {
  "use strict";
}

// bad
function baz({a, b, c}) {
  "use strict";
}

// bad
function qux(a, b, ...c) {
  "use strict";
}

