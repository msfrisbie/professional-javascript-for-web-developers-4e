let s1 = "01";
let s2 = "1.1";
let s3 = "z";
let b = false;
let f = 1.1;
let o = { 
  valueOf() {
    return -1;
  }
};
           
s1 = -s1;  // value becomes numeric -1
s2 = -s2;  // value becomes numeric -1.1
s3 = -s3;  // value becomes NaN
b = -b;    // value becomes numeric 0
f = -f;    // change to -1.1
o = -o;    // value becomes numeric 1
