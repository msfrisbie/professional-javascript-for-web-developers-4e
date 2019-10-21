let div = document.getElementById("div1");
let filter = function(node) {
  return node.tagName.toLowerCase() == "li" ? 
    NodeFilter.FILTER_ACCEPT :
    NodeFilter.FILTER_SKIP;
};
           
let walker = document.createTreeWalker(div, NodeFilter.SHOW_ELEMENT, 
                                       filter, false);
           
let node = iterator.nextNode();
while (node !== null) {
  console.log(node.tagName);     // output the tag name
  node = iterator.nextNode();
}
