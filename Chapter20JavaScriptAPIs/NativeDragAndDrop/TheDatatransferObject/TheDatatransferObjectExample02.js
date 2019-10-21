let dataTransfer = event.dataTransfer;
// read a URL
let url = dataTransfer.getData("url") || dataTransfer.getData("text/uri-list");
// read text
let text = dataTransfer.getData("Text");
