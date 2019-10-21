function onResolved(id) {
  setTimeout(console.log, 0, id, 'resolved');
}
function onRejected(id) {
  setTimeout(console.log, 0, id, 'rejected');
}

let p1 = new Promise((resolve, reject) => setTimeout(resolve, 3000));
let p2 = new Promise((resolve, reject) => setTimeout(reject, 3000));

p1.then(() => onResolved('p1'), 
        () => onRejected('p1'));
p2.then(() => onResolved('p2'), 
        () => onRejected('p2'));

// (after 3s)
// p1 resolved
// p2 rejected
PromiseThenExample01.js
