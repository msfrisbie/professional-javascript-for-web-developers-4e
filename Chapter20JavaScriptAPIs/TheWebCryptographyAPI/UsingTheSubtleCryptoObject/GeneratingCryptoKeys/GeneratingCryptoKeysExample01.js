(async function() {
  const params = {
    name: 'AES-CTR', 
    length: 128
  };

  const keyUsages = ['encrypt', 'decrypt'];

  const key = await crypto.subtle.generateKey(params, false, keyUsages);

  console.log(key);
  // CryptoKey {type: "secret", extractable: true, algorithm: {…}, usages: Array(2)}
})();
