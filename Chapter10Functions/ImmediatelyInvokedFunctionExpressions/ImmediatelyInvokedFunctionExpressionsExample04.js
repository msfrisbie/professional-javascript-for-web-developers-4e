let divs = document.querySelectorAll('div');

// Does not work!
for (var i = 0; i < divs.length; ++i) {
  divs[i].addEventListener('click', function() {
    console.log(i);
  });
}
