function foo() {
  console.log(this);
}

foo.call();   // Window {} 
foo.call(2);  // Number {2}
