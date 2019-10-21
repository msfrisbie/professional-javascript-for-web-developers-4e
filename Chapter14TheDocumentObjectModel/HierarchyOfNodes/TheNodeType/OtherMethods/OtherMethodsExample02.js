let deepList = myList.cloneNode(true);
alert(deepList.childNodes.length);     // 3 (IE < 9) or 7 (others)
           
let shallowList = myList.cloneNode(false);
alert(shallowList.childNodes.length);  // 0
