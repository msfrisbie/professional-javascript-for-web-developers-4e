function getWindowWidth() {
  if (document.all) {   // assumes IE
    return document.documentElement.clientWidth;  // INCORRECT USAGE!!!
  } else {
    return window.innerWidth;
  }
}
