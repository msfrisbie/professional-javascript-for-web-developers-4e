function problem() {
  let objectA = new Object();
  let objectB = new Object();
           
  objectA.someOtherObject = objectB;
  objectB.anotherObject = objectA;
}
