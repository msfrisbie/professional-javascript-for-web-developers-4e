window.color = 'red';
let o = { 
  color: 'blue'
};
                   
function sayColor() {
  console.log(this.color);
}
                   
sayColor();     // 'red'
                   
o.sayColor = sayColor;
o.sayColor();   // 'blue'
