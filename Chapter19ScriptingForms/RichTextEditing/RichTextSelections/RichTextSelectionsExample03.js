let range = frames["richedit"].document.selection.createRange();
range.pasteHTML(
    `<span style="background-color:yellow">${range.htmlText}</span>`);
