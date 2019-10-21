function foo() {
  console.log(arguments[0]);
}
foo(5);  // 5

let bar = () => {
  console.log(arguments[0]);
};
bar(5);  // ReferenceError: arguments is not defined
