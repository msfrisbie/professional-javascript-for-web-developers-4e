let sheet = null;
for (let i = 0, len = document.styleSheets.length; i < len; i++) {
  sheet = document.styleSheets[i];
  console.log(sheet.href);
}
This code outputs the href property of each style sheet used in the document (<style> elements have no href).
