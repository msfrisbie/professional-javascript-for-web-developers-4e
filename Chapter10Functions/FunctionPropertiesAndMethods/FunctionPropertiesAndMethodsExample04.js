window.color = 'red';
let o = {
  color: 'blue' 
};
                   
function sayColor() {
  console.log(this.color);
}
                   
sayColor();             // red
                   
sayColor.call(this);    // red
sayColor.call(window);  // red
sayColor.call(o);       // blue
