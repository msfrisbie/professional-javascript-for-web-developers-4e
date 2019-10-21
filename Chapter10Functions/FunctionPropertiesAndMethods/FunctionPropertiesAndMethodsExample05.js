window.color = 'red';
var o = {
  color: 'blue'
};
                   
function sayColor() {
  console.log(this.color);
}
let objectSayColor = sayColor.bind(o);
objectSayColor();  // blue
