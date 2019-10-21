function double(value) {
  setTimeout(() => setTimeout(console.log, 0, value * 2), 1000);
}

double(3);
// 6 (printed after roughly 1000ms)
