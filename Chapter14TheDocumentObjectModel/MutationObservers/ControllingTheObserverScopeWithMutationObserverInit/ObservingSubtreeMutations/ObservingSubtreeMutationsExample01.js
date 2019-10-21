// clear body
document.body.innerHTML = '';

let observer = new MutationObserver(
    (mutationRecords) => console.log(mutationRecords));

// Create initial element
document.body.appendChild(document.createElement('div'));

// Observe the <body> subtree
observer.observe(document.body, { attributes: true, subtree: true });

// Modify <body> subtree
document.body.firstChild.setAttribute('foo', 'bar');

// Subtree modification registers as mutation
// [
//   {
//     addedNodes: NodeList[],
//     attributeName: "foo", 
//     attributeNamespace: null,
//     oldValue: null, 
//     nextSibling: null,
//     previousSibling: null,
//     removedNodes: NodeList[],
//     target: div,
//     type: "attributes",
//   }
// ] 
SubtreeMutationExample01.js
