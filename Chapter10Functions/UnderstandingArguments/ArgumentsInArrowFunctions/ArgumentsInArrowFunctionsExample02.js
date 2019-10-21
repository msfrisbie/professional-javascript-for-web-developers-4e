function foo() {
  let bar = () => {
    console.log(arguments[0]);  // 5
  }; 
  bar();
}

foo(5);
