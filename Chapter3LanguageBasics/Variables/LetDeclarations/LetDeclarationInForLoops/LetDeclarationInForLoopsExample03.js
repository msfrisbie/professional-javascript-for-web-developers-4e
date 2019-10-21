for (var i = 0; i < 5; ++i) {
  setTimeout(() => console.log(i), 0)
}
// You might expect this to console.log 0, 1, 2, 3, 4
// It will actually console.log 5, 5, 5, 5, 5

