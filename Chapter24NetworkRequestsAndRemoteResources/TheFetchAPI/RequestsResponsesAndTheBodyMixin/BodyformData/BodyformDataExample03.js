fetch('https://foo.com/form-data')
  .then((response) => response.formData())
  .then((formData) => console.log(formData.get('foo'));

// bar 
BodyFormDataExample02.js
