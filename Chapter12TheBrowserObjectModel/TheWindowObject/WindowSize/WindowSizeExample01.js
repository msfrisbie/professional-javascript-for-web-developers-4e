let pageWidth = window.innerWidth,
    pageHeight = window.innerHeight;
  
if (typeof pageWidth != "number") {
  if (document.compatMode == "CSS1Compat"){
    pageWidth = document.documentElement.clientWidth;
    pageHeight = document.documentElement.clientHeight;
  } else {
    pageWidth = document.body.clientWidth;
    pageHeight = document.body.clientHeight;
  }
}
