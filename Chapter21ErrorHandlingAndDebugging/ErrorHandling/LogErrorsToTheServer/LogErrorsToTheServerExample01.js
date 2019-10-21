function logError(sev, msg) {
  let img = new Image(),
      encodedSev = encodeURIComponent(sev),
      encodedMsg = encodeURIComponent(msg);
  img.src = `log.php?sev=${encodedSev}&msg=${encodedMsg}`;
}
