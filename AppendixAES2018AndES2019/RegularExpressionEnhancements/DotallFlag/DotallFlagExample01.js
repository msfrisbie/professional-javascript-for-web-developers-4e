const text = `
foo
bar
`;

const re = /foo.bar/;

console.log(re.test(text));  // false
