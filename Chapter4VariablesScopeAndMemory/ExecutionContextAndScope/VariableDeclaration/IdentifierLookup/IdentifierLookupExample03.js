var color = 'blue';
           
function getColor() {
  let color = 'red';
  {
    let color = 'green';
    return color;
  }
}
           
console.log(getColor());  // 'green'
