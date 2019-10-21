let result = document.documentElement.compareDocumentPosition(document.body);
alert(!!(result & 0x10));
