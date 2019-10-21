let filter = {
  acceptNode(node) {
    return node.tagName.toLowerCase() == "p" ? 
         NodeFilter.FILTER_ACCEPT :
         NodeFilter.FILTER_SKIP;
  }
};
           
let iterator = document.createNodeIterator(root, NodeFilter.SHOW_ELEMENT, 
                                           filter, false);
