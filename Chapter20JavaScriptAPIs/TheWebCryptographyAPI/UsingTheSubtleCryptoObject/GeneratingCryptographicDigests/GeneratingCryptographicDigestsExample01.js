(async function() {
  const textEncoder = new TextEncoder();
  const message = textEncoder.encode('foo');
  const messageDigest = await crypto.subtle.digest('SHA-256', message);

  console.log(new Uint32Array(messageDigest));
})();
  
// Uint32Array(8) [1806968364, 2412183400, 1011194873, 876687389, 
//                 1882014227, 2696905572, 2287897337, 2934400610]
