// vectorPool is the existing object pool
let v1 = vectorPool.allocate();
let v2 = vectorPool.allocate();
let v3 = vectorPool.allocate();

v1.x = 10; 
v1.y = 5;
v2.x = -3; 
v2.y = -6;

addVector(v1, v2, v3);

console.log([v3.x, v3.y]);  // [7, -1]

vectorPool.free(v1);
vectorPool.free(v2);
vectorPool.free(v3);

// If the objects had properties referencing other objects, 
// those would need to be set to null here as well
v1 = null;
v2 = null;
v3 = null;
