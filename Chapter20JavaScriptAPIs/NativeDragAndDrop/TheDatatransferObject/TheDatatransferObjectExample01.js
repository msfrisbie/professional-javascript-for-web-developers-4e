// working with text
event.dataTransfer.setData("text", "some text");
let text = event.dataTransfer.getData("text");
           
// working with a URL
event.dataTransfer.setData("URL", "http://www.wrox.com/");
let url = event.dataTransfer.getData("URL");
