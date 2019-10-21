var script = document.createElement("script");
var code = "function sayHi(){alert('hi');}";
try {
  script.appendChild(document.createTextNode("code"));
} catch (ex){
  script.text = "code";
}
document.body.appendChild(script);
