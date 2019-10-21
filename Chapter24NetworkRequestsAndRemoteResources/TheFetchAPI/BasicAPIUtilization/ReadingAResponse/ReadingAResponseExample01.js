fetch('bar.txt')
  .then((response) => {
    response.text().then((data) => {
      console.log(data);
    });
  });

// Contents of bar.txt!
FetchExample03.js
