let re = null;
for (let i = 0; i < 10; i++) {
  re = /cat/g;
  re.test("catastrophe");
}
for (let i = 0; i < 10; i++) {
  re = new RegExp("cat", "g");
  re.test("catastrophe");
}
