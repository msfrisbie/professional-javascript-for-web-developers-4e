let div = document.getElementById("myDiv"),
    event;

div.addEventListener("myevent", (event) => {
  console.log("DIV: " + event.detail);
});

document.addEventListener("myevent", (event) => {
  console.log("DOCUMENT: " + event.detail);
});

if (document.implementation.hasFeature("CustomEvents", "3.0")) {
  event = document.createEvent("CustomEvent");
  event.initCustomEvent("myevent", true, false, "Hello world!");
  div.dispatchEvent(event);
}
