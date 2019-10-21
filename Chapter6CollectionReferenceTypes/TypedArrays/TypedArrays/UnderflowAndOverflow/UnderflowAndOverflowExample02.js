const clampedInts = new Uint8ClampedArray([-1, 0, 255, 256]);
alert(clampedInts);  // [0, 0, 255, 255]
