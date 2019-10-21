function loadStyleString(css){
  let style = document.createElement("style");
  style.type = "text/css";
  try{
    style.appendChild(document.createTextNode(css));
  } catch (ex){
    style.styleSheet.cssText = css;
  }
  let head = document.getElementsByTagName("head")[0];
  head.appendChild(style);
}
