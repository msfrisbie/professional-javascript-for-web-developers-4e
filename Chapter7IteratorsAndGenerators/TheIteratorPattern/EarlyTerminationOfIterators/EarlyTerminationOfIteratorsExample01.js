class Counter {
  constructor(limit) {
    this.limit = limit;
  }

  [Symbol.iterator]() {
    let count = 1,
        limit = this.limit;
    return {
      next() {
        if (count <= limit) {
          return { done: false, value: count++ };
        } else {
          return { done: true };
        }
      },
      return() {
        console.log('Exiting early');
        return { done: true };
      }
    };
  }
}

let counter1 = new Counter(5);

for (let i of counter1) {
  if (i > 2) {
    break; 
  }
  console.log(i);
}
// 1
// 2
// Exiting early


let counter2 = new Counter(5);

try {
  for (let i of counter2 {
    if (i > 2) {
      throw 'err'; 
    }
    console.log(i);
  }
} catch(e) {}
// 1
// 2
// Exiting early


let counter3 = new Counter(5);

let [a, b] = counter3;
// Exiting early
EarlyIteratorTerminationExample01.js
