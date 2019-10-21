document.addEventListener("readystatechange", (event) => {
  if (document.readyState == "interactive" || 
      document.readyState == "complete") {
    document.removeEventListener("readystatechange", arguments.callee); 
    console.log("Content loaded");            
  }
});
