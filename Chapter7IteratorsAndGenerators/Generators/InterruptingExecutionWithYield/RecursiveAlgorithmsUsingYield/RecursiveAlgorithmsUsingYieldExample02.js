class Node {
  constructor(id) {
    this.id = id;
    this.neighbors = new Set();
  }

  connect(node) {
    if (node !== this) {
      this.neighbors.add(node); 
      node.neighbors.add(this);
    }
  }
}

class RandomGraph {
  constructor(size) {
    this.nodes = new Set();

    // Create nodes
    for (let i = 0; i < size; ++i) {
      this.nodes.add(new Node(i));
    }

    // Randomly connect nodes
    const threshold = 1 / size;
    for (const x of this.nodes) {
      for (const y of this.nodes) {
        if (Math.random() < threshold) {
          x.connect(y);
        }
      }
    }
  }

  // This is just for debug purposes
  print() {
    for (const node of this.nodes) {
      const ids = [...node.neighbors]
                      .map((n) => n.id)
                      .join(',');
      
      console.log(`${node.id}: ${ids}`);
    }
  }
}

const g = new RandomGraph(6);

g.print();
// Example output:
// 0: 2,3,5
// 1: 2,3,4,5
// 2: 1,3
// 3: 0,1,2,4
// 4: 2,3
// 5: 0,4 
YieldRecursiveAlgorithmExample02.js
